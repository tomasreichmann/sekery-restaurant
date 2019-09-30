/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect, useCallback } from "react";
import isEqual from "lodash/isEqual";
import Page from "../../components/Page";
import theme from "../../config/theme";
import AdminNavigation from "../../components/admin/AdminNavigation";
import Headline from "../../components/Headline";
import Button from "../../components/controls/Button";
import MenuEditor from "../../components/admin/MenuEditor";
import { setEveningMenu, getEveningMenu } from "../../firebase/firestore";
import { DefaultLoader, InlineLoader } from "../../components/Loader";

function EveningMenu({ initialItems }) {
  const [items, setItems] = useState(null);
  const [saveState, setSaveState] = useState({ isLoading: true, error: null, items });

  useEffect(() => {
    if (items === null) {
      setItems(initialItems);
      setSaveState({ isLoading: false, error: null, items: initialItems })
    }
  }, [initialItems, items]);

  const saveMenu = useCallback(items => {
    const staticDailyMenu = {
      items
    };

    setSaveState({ ...saveState, isLoading: true })

    setEveningMenu(staticDailyMenu)
      .then(() => {
        setSaveState({ isLoading: false, error: null, items })
      })
      .catch(error => {
        setSaveState({ ...saveState, isLoading: false, error })
      });
  }, [saveState]);

  return (
    <Page title="Večerní menu">
      <AdminNavigation />
      <section css={{ padding: theme.spacing }}>
        <Headline level={1}>Večerní menu</Headline>
        {items === null ? (
          <DefaultLoader />
        ) : (
          <>
            <div css={{
              marginTop: theme.spacing,
              marginBottom: theme.spacing,
            }}>
              <Button onClick={() => saveMenu(items)} disabled={saveState.isLoading}>Uložit</Button> {!isEqual(items, saveState.items) && "Neuloženo"} {saveState.isLoading && <InlineLoader />}
            </div>
            {saveState.error && <p>Při ukládání došlo k chybě: {JSON.stringify(saveState.error)}</p>}

            <MenuEditor items={items} setItems={setItems} />
          </>
        )}
      </section>
    </Page>
  );
}

EveningMenu.getInitialProps = async () => {
  const menu = await getEveningMenu();
  return { initialItems: menu ? menu.items : [] };
};

export default EveningMenu;

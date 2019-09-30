/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect, useCallback } from "react";
import isEqual from "lodash/isEqual";
import Page from "../../../components/Page";
import theme from "../../../config/theme";
import AdminNavigation from "../../../components/admin/AdminNavigation";
import Headline from "../../../components/Headline";
import Button from "../../../components/controls/Button";
import MenuEditor from "../../../components/admin/MenuEditor";
import { setDailyMenu, getDailyMenu } from "../../../firebase/firestore";
import { DefaultLoader, InlineLoader } from "../../../components/Loader";

function LunchMenu({ menu, date }) {
  const initialItems = menu !== null ? menu.items : null;
  const [items, setItems] = useState(null);
  const [saveState, setSaveState] = useState({ isLoading: true, error: null, items });

  useEffect(() => {
    if (items === null) {
      setItems(initialItems);
      setSaveState({ isLoading: false, error: null, items: initialItems })
    }
  }, [initialItems, items]);

  const saveMenu = useCallback(items => {
    console.log("saveMenu", items);

    setSaveState({ ...saveState, isLoading: true })

    setDailyMenu({
      ...menu,
      items
    })
      .then(() => {
        setSaveState({ isLoading: false, error: null, items })
      })
      .catch(error => {
        setSaveState({ ...saveState, isLoading: false, error })
      });
  }, [saveState, menu]);

  const title = `Denní menu ${date}`;

  return (
    <Page title={title}>
      <AdminNavigation />
      <section css={{ padding: theme.spacing }}>
        <Headline level={1}>{title}</Headline>
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

LunchMenu.getInitialProps = async ({query: {date}}) => {
  console.log('date', date);
  const menu = await getDailyMenu(date);
  return { menu, date };
};

export default LunchMenu;

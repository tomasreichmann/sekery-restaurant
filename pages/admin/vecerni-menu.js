/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect, useCallback } from "react";
import isEqual from "lodash/isEqual";
import theme from "../../config/theme";
import Headline from "../../components/Headline";
import Button from "../../components/controls/Button";
import MenuEditor from "../../components/admin/MenuEditor";
import { setEveningMenu, getEveningMenu, getSectionContent, setSectionContent } from "../../firebase/firestore";
import { DefaultLoader, InlineLoader } from "../../components/Loader";
import AdminPage from "../../components/admin/AdminPage";
import SaveWrapper from "../../components/admin/SaveWrapper";
import ContentEditor from "../../components/admin/ContentEditor";
import EveningMenu from "../../components/sections/EveningMenu";
import MenuFeatures from "../../components/sections/MenuFeatures";

// IMPORTANT TO UPDATE WHEN COPYING SECTION
const sectionKey = "eveningMenu";
const getSectionData = () => getSectionContent(sectionKey);
const setSectionData = (data) => setSectionContent(sectionKey, data);

const model = [
  {
    prop: "sectionTitle",
    label: "Nadpis sekce",
    editorName: "Input",
  },
  {
    prop: "sectionTitleEn",
    label: "Nadpis sekce EN",
    editorName: "Input",
  },
  {
    prop: "headerImageUri",
    label: "Adresa obrázku hlavičky sekce",
    editorName: "Input",
  },
  {
    prop: "headerImageHeight",
    label: "Výška obrázku hlavičky sekce",
    editorName: "Number",
  },
  {
    prop: "noMenu",
    label: "Text pro případ kdy není vyplněné menu",
    editorName: "Input",
  },
  {
    prop: "noMenuEn",
    label: "Text pro případ kdy není vyplněné menu EN",
    editorName: "Input",
  },
  {
    prop: "features",
    label: "Upoutávky",
    editorName: "Array",
    editorProps: {
      model: {
        editorName: "Object",
        editorProps: {
          model: [
            {
              prop: "iconUri",
              label: "Adresa ikony",
              editorName: "Input",
            },
            {
              prop: "text",
              label: "Text",
              editorName: "Input",
            },

          ]
        }
      }
    }
  },
  {
    prop: "featuresEn",
    label: "Upoutávky EN",
    editorName: "Array",
    editorProps: {
      model: {
        editorName: "Object",
        editorProps: {
          model: [
            {
              prop: "iconUri",
              label: "Adresa ikony",
              editorName: "Input",
            },
            {
              prop: "text",
              label: "Text",
              editorName: "Input",
            },

          ]
        }
      }
    }
  },
];

function EveningMenuAdmin({ initialItems }) {
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
    <AdminPage title="Večerní menu">
      <section css={{ padding: theme.spacing }}>
        <Headline level={1}>Večerní menu</Headline>
        <SaveWrapper
          getData={getSectionData}
          setData={setSectionData}
        >
          {({ data, onChange}) => {
            return (
              <ContentEditor
                model={model}
                data={data}
                onChange={onChange}
                Preview={(props) => <div><EveningMenu {...props} /><MenuFeatures features={props.features}/></div>}
              />
            );
          }}
        </SaveWrapper>

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
    </AdminPage>
  );
}

EveningMenuAdmin.getInitialProps = async () => {
  const menu = await getEveningMenu();
  return { initialItems: menu ? menu.items : [] };
};

export default EveningMenuAdmin;

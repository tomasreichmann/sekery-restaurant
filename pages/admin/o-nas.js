/** @jsx jsx */
import { jsx } from "@emotion/core";
import AdminPage from "../../components/admin/AdminPage";
import ContentEditor from "../../components/admin/ContentEditor";
import SaveWrapper from "../../components/admin/SaveWrapper";
import theme from "../../config/theme";
import { setSectionContent, getSectionContent } from "../../firebase/firestore";
import Headline from "../../components/Headline";
import AboutUs from "../../components/sections/AboutUs";

const sectionKey = "aboutUs";

const Admin = () => {
  const model = [
    {
      prop: "sectionTitle",
      label: "Nadpis sekce",
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
      prop: "imageUri",
      label: "Adresa obrázku vedle textu",
      editorName: "Input",
    },
    {
      prop: "textMd",
      label: "Text",
      editorName: "MarkdownEditor",
    }
  ];

  return (
    <AdminPage title="O Nás">
      <div css={{ padding: theme.spacing }}>
        <Headline level={1} >O nás</Headline>
        <SaveWrapper
          getData={() =>
            getSectionContent(sectionKey)
          }
          setData={(data) => {
            return setSectionContent(sectionKey, data);
          }}
        >
          {({ data, onChange}) => {
            return (
              <ContentEditor
                model={model}
                data={data}
                onChange={onChange}
                Preview={AboutUs}
              />
            );
          }}
        </SaveWrapper>
      </div>
    </AdminPage>
  );
};

export default Admin;

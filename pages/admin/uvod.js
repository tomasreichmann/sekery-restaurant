/** @jsx jsx */
import { jsx } from "@emotion/core";
import AdminPage from "../../components/admin/AdminPage";
import Welcome from "../../components/sections/Welcome";
import ContentEditor from "../../components/admin/ContentEditor";
import SaveWrapper from "../../components/admin/SaveWrapper";
import theme from "../../config/theme";
import { setSectionContent, getSectionContent } from "../../firebase/firestore";
import Headline from "../../components/Headline";

const sectionKey = "welcome";

const Admin = () => {
  const model = [
    {
      prop: "imageUri",
      label: "Adresa obrázku",
      editorName: "Input",
    },
    {
      prop: "textMd",
      label: "Text",
      editorName: "MarkdownEditor",
    }
  ];

  return (
    <AdminPage title="Úvod">
      <div css={{ padding: theme.spacing }}>
        <Headline level={1} >Úvod</Headline>
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
                Preview={Welcome}
              />
            );
          }}
        </SaveWrapper>
      </div>
    </AdminPage>
  );
};

export default Admin;

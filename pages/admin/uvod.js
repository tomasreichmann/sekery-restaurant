/** @jsx jsx */
import { jsx } from "@emotion/core";
import AdminPage from "../../components/admin/AdminPage";
import Welcome from "../../components/sections/Welcome";
import ContentEditor from "../../components/admin/ContentEditor";
import SaveWrapper from "../../components/admin/SaveWrapper";
import theme from "../../config/theme";
import { setSectionContent, getSectionContent } from "../../firebase/firestore";
import Headline from "../../components/Headline";

// IMPORTANT TO UPDATE WHEN COPYING SECTION
const sectionKey = "welcome";
const getSectionData = () => getSectionContent(sectionKey);
const setSectionData = (data) => setSectionContent(sectionKey, data);

const model = [
  {
    prop: "imageUri",
    label: "Adresa obrázku",
    editorName: "Input",
  },
  {
    prop: "textMd",
    label: "Text",
    editorName: "Markdown",
  },
  {
    prop: "textMdEn",
    label: "Text EN",
    editorName: "Markdown",
  },
];

const AdminWelcome = () => {

  return (
    <AdminPage title="Úvod">
      <div css={{ padding: theme.spacing }}>
        <Headline level={1} >Úvod</Headline>
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
                Preview={Welcome}
              />
            );
          }}
        </SaveWrapper>
      </div>
    </AdminPage>
  );
};

export default AdminWelcome;

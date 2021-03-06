/** @jsx jsx */
import { jsx } from "@emotion/core";
import AdminPage from "../../components/admin/AdminPage";
import ContentEditor from "../../components/admin/ContentEditor";
import SaveWrapper from "../../components/admin/SaveWrapper";
import theme from "../../config/theme";
import { setSectionContent, getSectionContent } from "../../firebase/firestore";
import Headline from "../../components/Headline";
import AboutUs from "../../components/sections/AboutUs";

// IMPORTANT TO UPDATE WHEN COPYING SECTION
const sectionKey = "aboutUs";
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
    prop: "imageUri",
    label: "Adresa obrázku vedle textu",
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

const AdminAboutUs = () => {

  return (
    <AdminPage title="O Nás">
      <div css={{ padding: theme.spacing }}>
        <Headline level={1} >O nás</Headline>
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
                Preview={AboutUs}
              />
            );
          }}
        </SaveWrapper>
      </div>
    </AdminPage>
  );
};

export default AdminAboutUs;

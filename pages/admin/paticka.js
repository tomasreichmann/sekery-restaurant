/** @jsx jsx */
import { jsx } from "@emotion/core";
import AdminPage from "../../components/admin/AdminPage";
import ContentEditor from "../../components/admin/ContentEditor";
import SaveWrapper from "../../components/admin/SaveWrapper";
import theme from "../../config/theme";
import { setSectionContent, getSectionContent } from "../../firebase/firestore";
import Headline from "../../components/Headline";
import Footer from "../../components/sections/Footer";

// IMPORTANT TO UPDATE WHEN COPYING SECTION
const sectionKey = "footer";
const getSectionData = () => getSectionContent(sectionKey);
const setSectionData = (data) => setSectionContent(sectionKey, data);

const model = [
  {
    prop: "links",
    label: "Odkazy",
    editorName: "Array",
    editorProps: {
      model: {
        editorName: "Object",
        editorProps: {
          model: [
            {
              prop: "title",
              label: "Název",
              editorName: "Input",
            },
            {
              prop: "href",
              label: "Odkaz",
              editorName: "Input",
            },
            {
              prop: "imageUri",
              label: "Adresa obrázku",
              editorName: "Input",
            },
          ]
        }
      }
    }
  },
];

const AdminFooter = () => {
  return (
    <AdminPage title="Kontakt">
      <div css={{ padding: theme.spacing }}>
        <Headline level={1} >Patička</Headline>
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
                Preview={Footer}
              />
            );
          }}
        </SaveWrapper>
      </div>
    </AdminPage>
  );
};

export default AdminFooter;

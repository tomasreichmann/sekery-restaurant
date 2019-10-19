/** @jsx jsx */
import { jsx } from "@emotion/core";
import AdminPage from "../../components/admin/AdminPage";
import ContentEditor from "../../components/admin/ContentEditor";
import SaveWrapper from "../../components/admin/SaveWrapper";
import theme from "../../config/theme";
import { setSectionContent, getSectionContent } from "../../firebase/firestore";
import Headline from "../../components/Headline";
import ContactUs from "../../components/sections/ContactUs";
import RestaurantFeatures from "../../components/sections/RestaurantFeatures";

// IMPORTANT TO UPDATE WHEN COPYING SECTION
const sectionKey = "contactUs";
const getSectionData = () => getSectionContent(sectionKey);
const setSectionData = (data) => setSectionContent(sectionKey, data);

const ContactUsAndRestaurantFeatures = (contactUsContent = { restaurantFeatures: [] }) => {
  return <div>
    <ContactUs {...contactUsContent} />
    <RestaurantFeatures restaurantFeatures={contactUsContent.restaurantFeatures} />
  </div>
}
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
    prop: "bodyImageUri",
    label: "Adresa obrázku vedle textu",
    editorName: "Input",
  },
  {
    prop: "mapUri",
    label: "Adresa mapy",
    editorName: "Input",
  },
  {
    prop: "text",
    label: "Text",
    editorName: "Markdown",
  },
  {
    prop: "textEn",
    label: "Text EN",
    editorName: "Markdown",
  },
  {
    prop: "restaurantFeatures",
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
    prop: "restaurantFeaturesEn",
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

const AdminContactUs = () => {
  return (
    <AdminPage title="Kontakt">
      <div css={{ padding: theme.spacing }}>
        <Headline level={1} >Kontakt</Headline>
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
                Preview={ContactUsAndRestaurantFeatures}
              />
            );
          }}
        </SaveWrapper>
      </div>
    </AdminPage>
  );
};

export default AdminContactUs;

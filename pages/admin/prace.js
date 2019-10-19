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
import Career from "../../components/sections/Career";

// IMPORTANT TO UPDATE WHEN COPYING SECTION
const sectionKey = "career";
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
    prop: "text",
    label: "Text",
    editorName: "Markdown",
  },
  {
    prop: "textEn",
    label: "Text EN",
    editorName: "Markdown",
  },
];

const AdminCareer = () => {
  return (
    <AdminPage title="Pracovní příležitosti">
      <div css={{ padding: theme.spacing }}>
        <Headline level={1} >Pracovní příležitosti</Headline>
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
                Preview={Career}
              />
            );
          }}
        </SaveWrapper>
      </div>
    </AdminPage>
  );
};

export default AdminCareer;

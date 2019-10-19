/** @jsx jsx */
import { jsx } from "@emotion/core";
import AdminPage from "../../components/admin/AdminPage";
import ContentEditor from "../../components/admin/ContentEditor";
import SaveWrapper from "../../components/admin/SaveWrapper";
import theme from "../../config/theme";
import { setSectionContent, getSectionContent } from "../../firebase/firestore";
import Headline from "../../components/Headline";
import Gallery from "../../components/sections/Gallery";
import Photos from "../../components/Photos";

// IMPORTANT TO UPDATE WHEN COPYING SECTION
const sectionKey = "gallery";
const getSectionData = () => getSectionContent(sectionKey);
const setSectionData = (data) => setSectionContent(sectionKey, data);

const GalleryAndPhotos = (galleryContent = { photos: []}) => {
  return <div>
    <Gallery {...galleryContent} />
    <Photos items={galleryContent.photos.map(item => { return { uri: item }})} />
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
    prop: "photos",
    label: "Adresy fotek",
    editorName: "Array",
    editorProps: {
      model: {
        editorName: "Input",
      }
    }
  },
];

const AdminGallery = () => {
  return (
    <AdminPage title="Galerie">
      <div css={{ padding: theme.spacing }}>
        <Headline level={1} >Galerie</Headline>
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
                Preview={GalleryAndPhotos}
              />
            );
          }}
        </SaveWrapper>
      </div>
    </AdminPage>
  );
};

export default AdminGallery;

/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../components/Page";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/sections/Footer";
import { loadSection } from "../firebase/firestore";
import theme from "../config/theme";
import Headline from "../components/Headline";
import Photos from "../components/Photos";
import ErrorMessage from "../components/ErrorMessage";

function Home({
  error,
  galleryContent = {
    photos: [
      "https://i.imgur.com/FCbzbIi.jpg",
      "https://i.imgur.com/HMX0PIs.jpg",
      "https://i.imgur.com/YGSnoAv.jpg",
      "https://i.imgur.com/6e7LjxG.jpg",
      "https://i.imgur.com/rKOrGUa.jpg",
      "https://i.imgur.com/hugSQ2C.jpg",
      "https://i.imgur.com/9pWOGbJ.jpg",
      "https://i.imgur.com/8xeqpa0.jpg",
      "https://i.imgur.com/gs7627n.jpg",
      "https://i.imgur.com/IQWmEO0.jpg",
      "https://i.imgur.com/ahvCt5T.jpg",
      "https://i.imgur.com/oL0eKHk.jpg",
      "https://i.imgur.com/KPPWtd2.jpg",
      "https://i.imgur.com/QvHIOHt.jpg",
      "https://i.imgur.com/h9zELhR.jpg",
      "https://i.imgur.com/fnE154G.jpg"
    ]
  },
  headerContent
}) {
  const errorStatus = error && <ErrorMessage error={error} />;

  return (
    <Page headerContent={headerContent}>
      {errorStatus}
      <Headline
        level={1}
        css={{
          padding: theme.spacing,
          textAlign: "center",
          textTransform: "uppercase"
        }}
      >
        Galerie
      </Headline>
      <Photos
        items={galleryContent.photos.map(uri => {
          return { uri };
        })}
      />
      <ContactUs css={{ marginTop: theme.spacing * 2 }} />
      <Footer />
    </Page>
  );
}

Home.getInitialProps = async () => {
  try {
    const props = [];
    props.push(await loadSection("header"));
    return Object.assign({}, ...props);
  } catch (error) {
    return { error };
  }
};

export default Home;

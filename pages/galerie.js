/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../components/Page";
import Headline from "../components/Headline";
import theme from "../config/theme";
import Photos from "../components/Photos";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/sections/Footer";

const photos = Array(16).fill(null).map((_, index) => {
  const fileName = `0${index+1}`.slice(-2);
  return { uri: `/static/galerie/${fileName}.jpg` };
})

const Galerie = () => (
  <Page>
    <Headline level={1} css={{
      padding: theme.spacing,
      textAlign: "center",
      textTransform: "uppercase",
    }}>Galerie</Headline>
    <Photos items={photos} />
    <ContactUs css={{ marginTop: theme.spacing * 2 }}/>
    <Footer />
  </Page>
);

export default Galerie;

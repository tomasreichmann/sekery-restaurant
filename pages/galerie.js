/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../components/Page";
import Headline from "../components/Headline";
import theme from "../config/theme";
import Photos from "../components/Photos";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/sections/Footer";

const Galerie = () => (
  <Page>
    <Headline level={1} css={{
      padding: theme.spacing,
      textAlign: "center",
      textTransform: "uppercase",
    }}>Galerie</Headline>
    <Photos items={[
      { uri: "https://i.imgur.com/FCbzbIi.jpg" },
      { uri: "https://i.imgur.com/HMX0PIs.jpg" },
      { uri: "https://i.imgur.com/YGSnoAv.jpg" },
      { uri: "https://i.imgur.com/6e7LjxG.jpg" },
      { uri: "https://i.imgur.com/rKOrGUa.jpg" },
      { uri: "https://i.imgur.com/hugSQ2C.jpg" },
      { uri: "https://i.imgur.com/9pWOGbJ.jpg" },
      { uri: "https://i.imgur.com/8xeqpa0.jpg" },
      { uri: "https://i.imgur.com/gs7627n.jpg" },
      { uri: "https://i.imgur.com/IQWmEO0.jpg" },
      { uri: "https://i.imgur.com/ahvCt5T.jpg" },
      { uri: "https://i.imgur.com/oL0eKHk.jpg" },
      { uri: "https://i.imgur.com/KPPWtd2.jpg" },
      { uri: "https://i.imgur.com/QvHIOHt.jpg" },
      { uri: "https://i.imgur.com/h9zELhR.jpg" },
      { uri: "https://i.imgur.com/fnE154G.jpg" },
    ]} />
    <ContactUs css={{ marginTop: theme.spacing * 2 }}/>
    <Footer />
  </Page>
);

export default Galerie;

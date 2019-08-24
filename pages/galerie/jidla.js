/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../../components/Page";
import Headline from "../../components/Headline";
import theme from "../../config/theme";
import Photos from "../../components/Photos";
import ContactUs from "../../components/sections/ContactUs";
import Footer from "../../components/sections/Footer";

const Home = () => (
  <Page>
    <Headline level={1} css={{
      padding: theme.spacing,
      textAlign: "center",
      textTransform: "uppercase",
    }}>Jídla</Headline>
    <Photos items={[
      { uri: "https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg" },
      { uri: "https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg" },
      { uri: "https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg" },
      { uri: "https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg" },
      { uri: "https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg" },
      { uri: "https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg" },
      { uri: "https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg" },
      { uri: "https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg" },
      { uri: "https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg" },
    ]} />
    <ContactUs css={{ marginTop: theme.spacing * 2 }}/>
    <Footer />
  </Page>
);

export default Home;

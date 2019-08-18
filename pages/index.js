/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../components/Page";
import DailyMenu from "../components/sections/DailyMenu";
import MenuFeatures from "../components/sections/MenuFeatures";
import MealMenu from "../components/sections/MealMenu";
import ThemedEvenings from "../components/sections/ThemedEvenings";
import AboutUs from "../components/sections/AboutUs";
import Gallery from "../components/sections/Gallery";
import ContactUs from "../components/sections/ContactUs";

const Home = () => (
  <Page>
    <DailyMenu />
    <MenuFeatures />
    <MealMenu />
    <MenuFeatures />
    <ThemedEvenings />
    <AboutUs />
    <Gallery />
    <ContactUs />
  </Page>
);

export default Home;

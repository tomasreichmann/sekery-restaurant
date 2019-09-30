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
import RestaurantFeatures from "../components/sections/RestaurantFeatures";
import Career from "../components/sections/Career";
import Footer from "../components/sections/Footer";
import Welcome from "../components/sections/Welcome";
import DrinkMenu from "../components/sections/DrinkMenu";
import EveningMenu from "../components/sections/EveningMenu";

const Home = () => (
  <Page>
    <Welcome />
    <DailyMenu />
    <MealMenu />
    <DrinkMenu />
    <EveningMenu />
    <MenuFeatures />
    <AboutUs />
    <Gallery />
    <ContactUs />
    <RestaurantFeatures />
    <Career />
    <Footer />
  </Page>
);

export default Home;

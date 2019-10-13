/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../components/Page";
import DailyMenu from "../components/sections/DailyMenu";
import MenuFeatures from "../components/sections/MenuFeatures";
import MealMenu from "../components/sections/MealMenu";
import AboutUs from "../components/sections/AboutUs";
import Gallery from "../components/sections/Gallery";
import ContactUs from "../components/sections/ContactUs";
import RestaurantFeatures from "../components/sections/RestaurantFeatures";
import Career from "../components/sections/Career";
import Footer from "../components/sections/Footer";
import Welcome from "../components/sections/Welcome";
import DrinkMenu from "../components/sections/DrinkMenu";
import EveningMenu from "../components/sections/EveningMenu";
import { getSectionContent } from "../firebase/firestore";
import theme from "../config/theme";

function Home({ error, welcomeContent, aboutUsContent }) {
  const errorStatus = error && (
    <div css={{ padding: theme.spacing }}>
      <p>
        Při načítání stránky došlo k chybě.
        <br />
        Prosím oznamte problém administrátorovi{" "}
        <a href="mailto:tomasreichmann@gmail.com">Tomášovi Reichmannovi</a>.
        Děkuji.
      </p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );

  return (
    <Page>
      {errorStatus}
      <Welcome {...welcomeContent} />
      <DailyMenu />
      <MealMenu />
      <DrinkMenu />
      <EveningMenu />
      <MenuFeatures />
      <AboutUs {...aboutUsContent} />
      <Gallery />
      <ContactUs />
      <RestaurantFeatures />
      <Career />
      <Footer />
    </Page>
  );
}

const getSectionError = (section, error = "") => Error(`Sekci "${section}" se nepodařilo načíst. Zobrazí se záložní data.\n${JSON.stringify(error, null, 2)}`)

const loadSection = async (section) => {
  const content = await getSectionContent(section).catch(error => {
    throw getSectionError(section, error);
  });
    if (!content) {
      throw getSectionError(section);
    }
    return { [`${section}Content`]: content };
}

Home.getInitialProps = async () => {
  try {
    const props = [];
    props.push(await loadSection("welcome"));
    props.push(await loadSection("aboutUs"));
    return Object.assign({}, ...props);
  } catch (error) {
    return { error };
  }
};

export default Home;

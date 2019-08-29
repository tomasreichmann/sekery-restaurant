/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";

const MenuFeature = ({ children, iconUri = null }) => {
  return <div css={{
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: theme.spacing,
    paddingBottom: theme.spacing,
  }}>
    {iconUri && <img src={iconUri} alt="" css={{
      width: theme.spacing * 3,
      marginRight: theme.spacing,
    }}/>}
    {children}
  </div>
}
const MenuFeatures = () => {
  return (
    <section css={{ marginTop: -theme.spacing * 2, marginBottom: theme.spacing * 2 }} >
      <div
        css={{
          paddingLeft: theme.spacing,
          paddingRight: theme.spacing,
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "flex-start",
            gridGap: theme.spacing,
          },
        }}
      >
        <MenuFeature iconUri="/static/fresh-meal.svg" >
          V našem jídelníčku se pokrmy často mění, díky dodávání kvalitních a čerstvých surovin od našich řezníků, z kterých pak kuchaři vaří čerstvé pokrmy.
        </MenuFeature>
        <MenuFeature iconUri="/static/takeout.svg" >
        Nestíháte se u nás posadit? Objednejte si jídlo na telefonu +420 602 26 12 12 a my Vám ho zabalíme sebou.
        </MenuFeature>
        <MenuFeature iconUri="/static/allergens.svg" >
        Informace o obsažených alergenech poskytne obsluha na vyžádání zákazníka.
        </MenuFeature>
      </div>
    </section>
  );
};

export default MenuFeatures;

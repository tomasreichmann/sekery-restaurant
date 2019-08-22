/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";

const RestaurantFeature = ({ children, iconUri = null }) => {
  return <div css={{
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "row",
    alignItems: "center",
  }}>
    {iconUri && <img src={iconUri} alt="" css={{
      width: theme.spacing * 3,
      marginRight: theme.spacing,
    }}/>}
    {children}
  </div>
}
const RestaurantFeatures = () => {
  return (
    <section css={{ marginTop: -theme.spacing * 2, marginBottom: theme.spacing * 2 }}>
      <div
        css={{
          padding: theme.spacing,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          alignItems: "flex-start",
          gridGap: theme.spacing
        }}
      >
        <RestaurantFeature iconUri="/static/fresh-meal.svg" >
        Přijímáme stravenky
        </RestaurantFeature>
        <RestaurantFeature iconUri="/static/takeout.svg" >
        Přijímáme platební karty
        </RestaurantFeature>
        <RestaurantFeature iconUri="/static/allergens.svg" >
        Klimatizováno
        </RestaurantFeature>
        <RestaurantFeature iconUri="/static/allergens.svg" >
        Free WiFi
        </RestaurantFeature>
      </div>
    </section>
  );
};

export default RestaurantFeatures;

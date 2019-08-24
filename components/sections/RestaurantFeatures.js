/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";

const RestaurantFeature = ({ children, iconUri = null }) => {
  return <div css={{
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  }}>
    {iconUri && <img src={iconUri} alt="" css={{
      height: theme.spacing * 3,
      marginBottom: theme.spacing,
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
        <RestaurantFeature iconUri="/static/stravenky.png" >
        Přijímáme stravenky
        </RestaurantFeature>
        <RestaurantFeature iconUri="/static/cards.jpg" >
        Přijímáme platební karty
        </RestaurantFeature>
        <RestaurantFeature iconUri="/static/ac.svg" >
        Klimatizováno
        </RestaurantFeature>
        <RestaurantFeature iconUri="/static/wifi.svg" >
        Free WiFi
        </RestaurantFeature>
      </div>
    </section>
  );
};

export default RestaurantFeatures;

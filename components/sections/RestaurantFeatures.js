/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";

const RestaurantFeature = ({ children, iconUri = null }) => {
  return (
    <div
      css={{
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: theme.spacing
      }}
    >
      {iconUri && (
        <img
          src={iconUri}
          alt=""
          css={{
            height: theme.spacing * 3,
            marginBottom: theme.spacing
          }}
        />
      )}
      {children}
    </div>
  );
};
const RestaurantFeatures = ({
  restaurantFeatures = [
    {
      iconUri: "/static/stravenky.png",
      text: "Přijímáme stravenky"
    },
    {
      iconUri: "/static/cards.jpg",
      text: "Přijímáme platební karty"
    },
    {
      iconUri: "/static/ac.svg",
      text: "Klimatizováno"
    },
    {
      iconUri: "/static/wifi.svg",
      text: "Free WiFi"
    }
  ]
}) => {
  return (
    <section
      css={{ marginTop: -theme.spacing * 2, marginBottom: theme.spacing * 2 }}
    >
      <div
        css={{
          [`@media (min-width: ${theme.breakpoint.small}px)`]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            alignItems: "flex-start"
          }
        }}
      >
        {restaurantFeatures.map(
          (
            { iconUri = "", text = "" } = { iconUri: "", text: "" },
            featureIndex
          ) => {
            return (
              <RestaurantFeature iconUri={iconUri} key={featureIndex}>
                {text}
              </RestaurantFeature>
            );
          }
        )}
      </div>
    </section>
  );
};

export default RestaurantFeatures;

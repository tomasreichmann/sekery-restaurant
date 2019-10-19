/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";

const MenuFeature = ({ children, iconUri = null }) => {
  return (
    <div
      css={{
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: theme.spacing,
        paddingBottom: theme.spacing
      }}
    >
      {iconUri && (
        <img
          src={iconUri}
          alt=""
          css={{
            width: theme.spacing * 3,
            marginRight: theme.spacing
          }}
        />
      )}
      {children}
    </div>
  );
};
const MenuFeatures = ({ features = [] }) => {
  return (
    <section
      css={{ marginTop: -theme.spacing * 2, marginBottom: theme.spacing * 2 }}
    >
      <div
        css={{
          paddingLeft: theme.spacing,
          paddingRight: theme.spacing,
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(${theme.breakpoint
              .large / 3}px, 1fr))`,
            alignItems: "flex-start",
            gridGap: theme.spacing
          }
        }}
      >
        {features.map(
          (
            { iconUri = "", text = "" } = { iconUri: "", text: "" },
            featureIndex
          ) => {
            return (
              <MenuFeature iconUri={iconUri} key={featureIndex}>
                {text}
              </MenuFeature>
            );
          }
        )}
      </div>
    </section>
  );
};

export default MenuFeatures;

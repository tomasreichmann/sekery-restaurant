/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../components/Page";
import theme from "../config/theme";

const Theme = () => {
  return (
    <Page>
      <h1 css={theme.typography.h1}>Theme</h1>
      <h2 css={theme.typography.h2}>Colors</h2>
      {Object.keys(theme.color).map(colorKey => {
        return (
          <div
            key={colorKey}
            css={{
              height: "2em",
              backgroundColor: theme.color[colorKey],
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: theme.spacing
            }}
          >
            <span
              css={{
                display: "block",
                padding: theme.spacing / 2,
                backgroundColor: theme.color.paper
              }}
            >
              {colorKey}
            </span>
          </div>
        );
      })}
    </Page>
  );
};

export default Theme;

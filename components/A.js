/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";

const A = ({ children, color = theme.color.accent, hoverColor = theme.color.accentLighter, textDecoration = "underline", ...restProps }) => {
  return (
    <a {...restProps} css={{
      textDecoration,
      color,
      ":hover": {
        color: hoverColor,
        textDecoration: "none",
      },
      cursor: "pointer",
    }}>
      {children}
    </a>
  );
};

export default A;

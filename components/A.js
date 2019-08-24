/** @jsx jsx */
import { forwardRef } from "react";
import { jsx } from "@emotion/core";
import theme from "../config/theme";

const A = forwardRef(({ children, color = theme.color.primary, hoverColor = theme.color.primaryLighter, textDecoration = "underline", ...restProps }, ref) => {
  return (
    <a {...restProps} ref={ref} css={{
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
});

export default A;

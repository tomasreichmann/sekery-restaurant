/** @jsx jsx */
import { forwardRef } from "react";
import { jsx, css } from "@emotion/core";
import theme from "../../config/theme";

const Button = ({ children, disabled = false, backgroundColor = theme.color.primary, hoverBackgroundColor = theme.color.primaryLighter, textDecoration = "underline", ...restProps }) => {
  const disabledDependentStyles = disabled ? {
    pointerEvents: "none",
    backgroundColor: theme.color.textMuted,
  } : {
    cursor: "pointer",
    ":hover": {
      backgroundColor: hoverBackgroundColor,
    },
  };
  return (
    <button css={{
      color: disabled ? theme.color.paper : theme.color.white,
      border: 0,
      font: "inherit",
      borderRadius: theme.borderRadius,
      backgroundColor,
      ...disabledDependentStyles,
    }} {...restProps} >
      {children}
    </button>
  );
};

export default Button;

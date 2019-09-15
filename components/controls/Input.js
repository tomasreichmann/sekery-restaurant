/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";

const Input = ({ type = "text", onChange, ...restProps }) => {
  const onInputChange = (event) => {
    onChange(type === "checkbox" ? event.target.checked : event.target.value)
  }
  return (
    <input
      css={{
        color: theme.color.inherit,
        border: 0,
        outline: 0,
        padding: 0,
        width: "auto",
        lineHeight: "inherit",
        font: "inherit",
        width: "100%",
        height: "1.75em",
        borderBottom: `2px dotted ${theme.color.textMuted}`,
        ":hover, :focus": {
          borderBottom: `2px dashed ${theme.color.primaryLightest}`,
        }
      }}
      type={type}
      onChange={onInputChange}
      {...restProps}
    />
  );
};

export default Input;

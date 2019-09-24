/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";

const Message = ({ children, ...restProps }) => {
  return (
    <p css={{
      padding: theme.spacing,
      color: theme.color.accentMuted,
      textAlign: "center",
    }} {...restProps} >
      {children}
    </p>
  );
};

export default Message;

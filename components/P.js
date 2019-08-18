/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";

const P = ({ children, ...restProps }) => {
  return (
    <p {...restProps} css={{
      marginBottom: theme.spacing / 2,
    }}>
      {children}
    </p>
  );
};

export default P;

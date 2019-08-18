/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";

const Headline = ({ children, level = 1, ...restProps }) => {
  const Component = `h${level}`;
  return (
    <Component {...restProps} css={{
      ...theme.typography[Component]
    }}>
      {children}
    </Component>
  );
};

export default Headline;

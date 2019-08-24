/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";

const HR = ({ color = theme.color.primaryLightest, height = 4, ...restProps }) => {
  return (
    <hr {...restProps} css={{
      backgroundColor: color,
      height,
      border: 0,
    }} />
  );
};

export default HR;

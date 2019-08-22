/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";

const SectionHeader = ({
  children,
  background = `${
    theme.color.primaryLighter
  } center center / 50% url(/static/wood.jpg)`,
  ...restProps
}) => {
  return (
    <header
      {...restProps}
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: background ? background : "transparent none",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        textAlign: "center",
        padding: `${theme.spacing}px ${theme.spacing}px ${theme.spacing}px ${
          theme.spacing
        }px `,
        ...theme.typography.h1,
        fontSize: "3em",
        minHeight: 200,
        color: theme.color.white,
        textShadow: `0 0 16px rgba(0,0,0,1)`,
        // boxShadow: theme.shadow.middle,
        letterSpacing: 2,
        textTransform: "uppercase"
      }}
    >
      {children}
    </header>
  );
};

export default SectionHeader;

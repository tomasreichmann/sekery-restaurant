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
        background: background ? background : "transparent none",
        textAlign: "center",
        padding: `${theme.spacing}px ${theme.spacing}px ${theme.spacing}px ${
          theme.spacing
        }px `,
        ...theme.typography.h1,
        fontSize: "3em",
        color: theme.color.textMuted,
        textShadow: `0 0 16px rgba(255,255,255,1)`,
        boxShadow: theme.shadow.middle,
        letterSpacing: 2,
        textTransform: "uppercase"
      }}
    >
      {children}
      <div
        css={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          height: theme.spacing / 4,
          background: `rgba(0,0,0,0.35)`,
          mixBlendMode: "multiply"
        }}
      />
    </header>
  );
};

export default SectionHeader;

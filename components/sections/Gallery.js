/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Link from "next/link";
import Headline from "../Headline";
import A from "../A";
import HR from "../HR";
import JumpOffset from "../JumpOffset";

const Thumbnail = ({ uri, children = null, ...restProps }) => {
  return (
    <div
      css={{
        position: "relative",
        background: `url("${uri}") center center / cover`,
        paddingTop: "66%"
      }}
      {...restProps}
    >
      <div css={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        padding: theme.spacing,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}>{children}</div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section css={{ marginBottom: theme.spacing * 2 }} >
      <JumpOffset id="galerie"/>
      <div
        css={{
          color: theme.color.white,
          textTransform: "uppercase",
          textShadow: `rgba(0, 0, 0, 1) 0 0 16px`,
        }}
      >
        <Link href="/galerie">
          <A color="inherit" hoverColor="inherit" textDecoration="none">
            <Thumbnail uri="/static/galerie.jpg" css={{
              paddingTop: "32%",
              backgroundPositionY: "35%",
            }}>
              <Headline level={1} css={{ color: "inherit"}}>Galerie</Headline>
            </Thumbnail>
          </A>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;

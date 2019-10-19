/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import Link from "next/link";
import A from "../A";
import JumpOffset from "../JumpOffset";
import SectionHeader from "../SectionHeading";

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

const Gallery = ({ sectionTitle = "Galerie", headerImageUri = "https://i.imgur.com/uxGwldo.jpg", headerImageHeight = 528 }) => {
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
          <SectionHeader backgroundUrl={headerImageUri} css={{
            backgroundAttachment: "scroll",
            backgroundPosition: "center center",
            backgroundSize: "auto auto",
            height: headerImageHeight - theme.spacing * 2 ,
            minHeight: 0,
          }}>{sectionTitle}</SectionHeader>
          </A>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;

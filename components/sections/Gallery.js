/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Link from "next/link";
import Headline from "../Headline";
import A from "../A";

const Thumbnail = ({ uri, children = null }) => {
  return (
    <div
      css={{
        position: "relative",
        background: `url("${uri}") center center / cover`,
        paddingTop: "66%"
      }}
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
    <section css={{ marginBottom: theme.spacing * 2 }}>
      <SectionHeader css={{ marginBottom: 0 }}>Galerie</SectionHeader>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          color: theme.color.white,
          textTransform: "uppercase",
          textShadow: `rgba(0, 0, 0, 1) 0 0 16px`,
        }}
      >
        <Link href="/galerie/interier">
          <A color="inherit" hoverColor="inherit" textDecoration="none" >
            <Thumbnail uri="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Slimming-Worlds-roast-dinner-1220x803.jpg">
              <Headline level={1} css={{ color: "inherit"}}>Interier</Headline>
            </Thumbnail>
          </A>
        </Link>
        <Link href="/galerie/jidla">
        <A color="inherit" hoverColor="inherit" textDecoration="none" >
            <Thumbnail uri="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Slimming-Worlds-roast-dinner-1220x803.jpg">
              <Headline level={1} css={{ color: "inherit"}}>Jídla</Headline>
            </Thumbnail>
          </A>
        </Link>
        <Link href="/galerie/ostatní">
        <A color="inherit" hoverColor="inherit" textDecoration="none" >
            <Thumbnail uri="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Slimming-Worlds-roast-dinner-1220x803.jpg">
              <Headline level={1} css={{ color: "inherit"}}>Ostatní</Headline>
            </Thumbnail>
          </A>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;

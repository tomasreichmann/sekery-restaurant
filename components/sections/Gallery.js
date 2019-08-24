/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Link from "next/link";
import Headline from "../Headline";
import A from "../A";
import HR from "../HR";

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
    <section css={{ marginBottom: theme.spacing * 2 }} id="galerie">
      {/* <HR /> */}
      {/* <Headline level={1} css={{
        textAlign: "center",
        padding: `${theme.spacing}px 0 ${theme.spacing}px`,
        margin: 0,
        textTransform: "uppercase",
      }} >Galerie</Headline> */}
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
          <A color="inherit" hoverColor="inherit" textDecoration="none" css={{
            gridColumn: "span 2",
            gridRow: "span 2",
          }}>
            <Thumbnail uri="https://upload.wikimedia.org/wikipedia/commons/a/a2/Ikea_canteen_in_Sydney.jpeg">
              <Headline level={1} css={{ color: "inherit"}}>Interier</Headline>
            </Thumbnail>
          </A>
        </Link>
        <Link href="/galerie/jidla">
        <A color="inherit" hoverColor="inherit" textDecoration="none" >
            <Thumbnail uri="https://storage.needpix.com/rsynced_images/meat-and-chips-2149986_1280.jpg">
              <Headline level={1} css={{ color: "inherit"}}>Jídla</Headline>
            </Thumbnail>
          </A>
        </Link>
        <Link href="/galerie/udalosti">
        <A color="inherit" hoverColor="inherit" textDecoration="none" >
            <Thumbnail uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJYFZnUYPLRq7tynkG2Np-UlCBG5ItWcs_DMfA-T5LeQfxuPM8g">
              <Headline level={1} css={{ color: "inherit"}}>Události</Headline>
            </Thumbnail>
          </A>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;

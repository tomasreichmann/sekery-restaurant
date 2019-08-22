/** @jsx jsx */
import { jsx } from "@emotion/core";

import theme from "../config/theme";
import A from "./A";

const linkProps = {
  color: "inherit",
  hoverColor: theme.color.primaryLighter,
  textDecoration: "none"
};

const navStyles = {
  fontSize: theme.fontSize.h3,
  lineHeight: theme.lineHeight.h3,
  textTransform: "uppercase"
};

const Header = ({ ...restProps }) => {
  return (
    <header
      {...restProps}
      css={{
        backgroundColor: theme.color.paperLighter,
        // background: `linear-gradient(to bottom, rgba(189,171,158,0.75) 0%,rgba(189,171,158,0.75) 50%,rgba(189,171,158,0.25) 100%)`,
        padding: theme.spacing,
        display: "grid",
        gridTemplateColumns: "1fr 300px 1fr",
        gridTemplateRows: "auto 1fr",
        gridGap: theme.spacing,
        alignItems: "center",
        minHeight: 200,
        fontFamily: theme.fontFamily.headline,
        color: theme.color.primary
      }}
    >
      <div>
        <A {...linkProps} href="/">
          [CZ]
        </A>
        &emsp;
        <A {...linkProps} href="/en">
          [EN]
        </A>
      </div>
      <A
        href="/"
        hoverColor="transparent"
        css={{
          gridRow: "1/3",
          gridColumn: 2,
          background: `url("/static/logo.svg") center center no-repeat`,
          backgroundSize: "110%",
          alignSelf: "stretch",
          color: "transparent",
        }}
      >
        Sekery Restaurant
      </A>
      <div css={{ textAlign: "right" }}>
        <A
          {...linkProps}
          href="https://www.facebook.com/Sekery-Restaurant-103322994343167"
        >
          <img
            src="/static/facebook.svg"
            alt="Facebook"
            css={{ height: "2em" }}
          />
        </A>
        &emsp;
        <A {...linkProps} href="https://www.instagram.com/sekery_restaurant/">
          <img
            src="/static/instagram.svg"
            alt="Instagram"
            css={{ height: "2em" }}
          />
        </A>
        &emsp;
        <A {...linkProps} href="https://www.tripadvisor.cz/">
          <img
            src="/static/tripadvisor.svg"
            alt="Trip Advisor"
            css={{ height: "2em" }}
          />
        </A>
      </div>
      {/* <div css={{ textAlign: "right", ...navStyles }}>
        <A {...linkProps} href="#denni-menu">
          Denní menu
        </A>
        &emsp;
        <A {...linkProps} href="#jidelni-listek">
          Jídelní lístek
        </A>
        &emsp;
        <A {...linkProps} href="#napojovy-listek">
          Nápoje
        </A>
        &emsp;
        <A {...linkProps} href="#tematicke-vecery">
          Tematické večery
        </A>
      </div> */}
      {/* <div css={navStyles}>
        <A {...linkProps} href="#o-nas">
          O nás
        </A>
        &emsp;
        <A {...linkProps} href="#galerie">
          Galerie
        </A>
        &emsp;
        <A {...linkProps} href="#kontakt">
          Kontakt
        </A>
        &emsp;
        <A {...linkProps} href="#pracovni-prilezitosti">
          Práce
        </A>
      </div> */}
      <div css={{
        gridColumn: "1 / 4",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: theme.fontSize.h4,
      }}>
        <A {...linkProps} href="#denni-menu">
          Denní menu
        </A>
        &emsp;
        <A {...linkProps} href="#jidelni-listek">
          Jídelní lístek
        </A>
        &emsp;
        <A {...linkProps} href="#napojovy-listek">
          Nápoje
        </A>
        &emsp;
        <A {...linkProps} href="#tematicke-vecery">
          Tematické večery
        </A>
        &emsp;
        <A {...linkProps} href="#o-nas">
          O nás
        </A>
        &emsp;
        <A {...linkProps} href="#galerie">
          Galerie
        </A>
        &emsp;
        <A {...linkProps} href="#kontakt">
          Kontakt
        </A>
        &emsp;
        <A {...linkProps} href="#pracovni-prilezitosti">
          Práce
        </A>
      </div>
    </header>
  );
};

export default Header;

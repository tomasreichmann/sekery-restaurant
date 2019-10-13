/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";
import { useState, useEffect } from "react";
import Measure from "react-measure";

import theme from "../config/theme";
import A from "./A";
import IconFacebook from "./icons/IconFacebook";
import IconInstagram from "./icons/IconInstagram";
import IconTripadvisor from "./icons/IconTripadvisor";
import { useScrollPosition } from "./hooks/useScrollPosition";

const linkProps = {
  color: "inherit",
  hoverColor: theme.color.primaryLighter,
  textDecoration: "none"
};

const LanguageLinks = () => {
  return (
    <>
      <A {...linkProps} href="/">
        <img
          src="/static/cz.svg"
          css={{
            height: "1em",
            border: `1px solid ${theme.color.border}`
          }}
        />
      </A>
      &emsp;
      <A {...linkProps} href="/en">
        <img
          src="/static/en.svg"
          css={{
            height: "1em",
            border: `1px solid ${theme.color.border}`
          }}
        />
      </A>
    </>
  );
};

const SocialLinks = () => {
  return (
    <>
      <A
        {...linkProps}
        href="https://www.facebook.com/Sekery-Restaurant-103322994343167"
      >
        <IconFacebook css={{ height: "2em" }} />
      </A>
      &emsp;
      <A {...linkProps} href="https://www.instagram.com/sekery_restaurant/">
        <IconInstagram css={{ height: "2em" }} />
      </A>
      &emsp;
      <A {...linkProps} href="https://www.tripadvisor.cz/">
        <IconTripadvisor css={{ height: "2em" }} />
      </A>
    </>
  );
};

const NavigationLinks = ({ onClick = () => {} }) => {
  return (
    <>
      <A {...linkProps} href="/#denni-menu" onClick={onClick}>
        Denní menu
      </A>
      &emsp;
      <A {...linkProps} href="/#napojovy-listek" onClick={onClick}>
        Nápojový lístek
      </A>
      &emsp;
      <A {...linkProps} href="/#vecerni-menu" onClick={onClick}>
        Večerní menu
      </A>
      &emsp;
      <A {...linkProps} href="/#o-nas" onClick={onClick}>
        O nás
      </A>
      &emsp;
      <A {...linkProps} href="/#galerie" onClick={onClick}>
        Galerie
      </A>
      &emsp;
      <A {...linkProps} href="/#kontakt" onClick={onClick}>
        Kontakt
      </A>
      &emsp;
      <A {...linkProps} href="/#pracovni-prilezitosti" onClick={onClick}>
        Práce
      </A>
    </>
  );
};

const fadeIn = keyframes`
  from {
    transform: translate3d(0,${-theme.menuOffset}px,0);
  }
  to {
    transform: translate3d(0,0,0);
  }
`;

const LargeFixedHeader = ({ ...restProps }) => {
  return (
    <header
      {...restProps}
      css={{
        position: "fixed",
        animation: `${fadeIn} 0.3s ease 1`,
        left: 0,
        top: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: theme.color.paperLighter,
        padding: theme.spacing / 2,
        fontFamily: theme.fontFamily.headline,
        color: theme.color.primary,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxShadow: theme.shadow.middle
      }}
    >
      <A
        href="/"
        hoverColor="transparent"
        css={{
          background: `url("/static/logo.svg") center center / contain no-repeat`,
          width: 110,
          height: 90,
          flex: "0 0 auto",
          alignSelf: "stretch",
          color: "transparent",
          marginRight: theme.spacing,
          marginTop: -theme.spacing / 2,
          marginBottom: -theme.spacing / 2
        }}
      >
        Sekery Restaurant
      </A>
      <div
        css={{
          flex: "1 1 auto",
          textTransform: "uppercase",
          fontSize: theme.fontSize.h4,
          alignSelf: "center"
        }}
      >
        <NavigationLinks />
      </div>
      <div
        css={{
          flex: "0 0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          alignSelf: "stretch"
        }}
      >
        <div>
          <SocialLinks />
        </div>
        <div>
          <LanguageLinks />
        </div>
      </div>
    </header>
  );
};

const LargeHeader = ({ ...restProps }) => {
  return (
    <header
      {...restProps}
      css={{
        backgroundColor: theme.color.paperLighter,
        padding: theme.spacing,
        minHeight: 160,
        fontFamily: theme.fontFamily.headline,
        color: theme.color.primary
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        <div
          css={{
            textAlign: "left",
            marginRight: theme.spacing,
            width: 140
          }}
        >
          <LanguageLinks />
        </div>
        <A
          href="/"
          hoverColor="transparent"
          css={{
            background: `url("/static/logo.svg") center center / contain no-repeat`,
            width: 200,
            height: 150,
            flex: "0 0 auto",
            alignSelf: "stretch",
            color: "transparent"
          }}
        >
          Sekery Restaurant
        </A>
        <div
          css={{ textAlign: "right", marginLeft: theme.spacing, width: 140 }}
        >
          <SocialLinks />
        </div>
      </div>
      <div
        css={{
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: theme.fontSize.h4
        }}
      >
        <NavigationLinks />
      </div>
    </header>
  );
};

const LargeHeaderController = ({ ...restProps }) => {
  const [isFixed, setIsFixed] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y > 150 && !isFixed) {
        setIsFixed(true);
      } else if (currPos.y <= 150 && isFixed) {
        setIsFixed(false);
      }
    },
    { deps: [isFixed], useWindow: true }
  );
  useEffect(() => {
    if (typeof window !== undefined) {
      window.scroll();
    }
  }, []);

  return (
    <>
      <LargeHeader {...restProps} />
      {isFixed && <LargeFixedHeader {...restProps} />}
    </>
  );
};

const SmallHeader = ({ ...restProps }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <div
        css={{
          paddingTop: theme.menuOffset
        }}
      />
      <header
        {...restProps}
        css={{
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: theme.color.paperLighter,
          padding: theme.spacing / 2,
          fontFamily: theme.fontFamily.headline,
          color: theme.color.primary,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          boxShadow: theme.shadow.middle
        }}
      >
        <button
          css={{
            border: 0,
            background: "none",
            fontSize: "2em",
            padding: theme.spacing,
            lineHeight: "1em",
            cursor: "pointer"
          }}
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          ☰
        </button>
        <A
          href="/"
          hoverColor="transparent"
          css={{
            background: `url("/static/logo.svg") center center / contain no-repeat`,
            width: 110,
            height: 90,
            flex: "0 0 auto",
            alignSelf: "stretch",
            color: "transparent",
            marginRight: theme.spacing,
            marginTop: -theme.spacing / 2,
            marginBottom: -theme.spacing / 2
          }}
        >
          Sekery Restaurant
        </A>
        <div
          css={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            alignSelf: "stretch"
          }}
        >
          <div>
            <SocialLinks />
          </div>
          <div>
            <LanguageLinks />
          </div>
        </div>
        {menuIsOpen && <BurgerMenu onClick={() => setMenuIsOpen(false)} />}
      </header>
    </>
  );
};

const BurgerMenu = ({ onClick, ...restProps }) => {
  return (
    <div
      css={{
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: theme.color.paperLighter,
        padding: theme.spacing,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        textTransform: "uppercase",
        fontSize: theme.fontSize.h4,
        boxShadow: theme.shadow.middle
      }}
      {...restProps}
    >
      <NavigationLinks onClick={onClick} />
    </div>
  );
};

const Header = ({ ...restProps }) => {
  const [size, setSize] = useState(null);

  return (
    <Measure
      bounds
      onResize={contentRect => {
        const newSize =
          contentRect.bounds.width < theme.breakpoint.large ? "small" : "large";
        if (newSize !== size) {
          setSize(newSize);
        }
      }}
    >
      {({ measureRef }) => (
        <div
          ref={measureRef}
          css={{
            position: "relative",
            zIndex: 100
          }}
        >
          {size === "large" ? (
            <LargeHeaderController {...restProps} />
          ) : (
            <SmallHeader {...restProps} />
          )}
        </div>
      )}
    </Measure>
  );
};

export default Header;

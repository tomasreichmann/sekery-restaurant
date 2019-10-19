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

const LanguageLinks = ({ languages }) => {
  return (
    <>
      {languages.map(
        ({ icon = "", code = "" } = { icon: "", code: "" }, languageIndex) => {
          return (
            <A
              {...linkProps}
              href={code === "cz" ? "/" : `/${code}`}
              key={code}
              css={{
                marginRight:
                  languageIndex < languages.length - 1 ? theme.spacing : 0
              }}
            >
              <img
                src={icon}
                css={{
                  height: "1em",
                  border: `1px solid ${theme.color.border}`
                }}
              />
            </A>
          );
        }
      )}
    </>
  );
};

const SocialLinks = ({ facebook, instagram, tripadvisor }) => {
  return (
    <>
      <A {...linkProps} href={facebook}>
        <IconFacebook css={{ height: "2em" }} />
      </A>
      &emsp;
      <A {...linkProps} href={instagram}>
        <IconInstagram css={{ height: "2em" }} />
      </A>
      &emsp;
      <A {...linkProps} href={tripadvisor}>
        <IconTripadvisor css={{ height: "2em" }} />
      </A>
    </>
  );
};

const NavigationLinks = ({ navigation, onClick = () => {} }) => {
  return (
    <>
      {navigation.map(({ text = "", href = "" } = { text: "", href: "" }) => {
        return (
          <A
            key={href}
            {...linkProps}
            href={href}
            onClick={onClick}
            css={{
              marginLeft: theme.spacing / 2,
              marginRight: theme.spacing / 2
            }}
          >
            {text}
          </A>
        );
      })}
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

const LargeFixedHeader = ({ headerContent, ...restProps }) => {
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
        {headerContent.pageTitle}
      </A>
      <div
        css={{
          flex: "1 1 auto",
          textTransform: "uppercase",
          fontSize: theme.fontSize.h4,
          alignSelf: "center"
        }}
      >
        <NavigationLinks navigation={headerContent.navigation} />
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
          <SocialLinks {...headerContent.social} />
        </div>
        <div>
          <LanguageLinks languages={headerContent.languages} />
        </div>
      </div>
    </header>
  );
};

export const LargeHeader = ({ headerContent, ...restProps }) => {
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
          <LanguageLinks languages={headerContent.languages} />
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
          {headerContent.pageTitle}
        </A>
        <div
          css={{ textAlign: "right", marginLeft: theme.spacing, width: 140 }}
        >
          <SocialLinks {...headerContent.social} />
        </div>
      </div>
      <div
        css={{
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: theme.fontSize.h4
        }}
      >
        <NavigationLinks navigation={headerContent.navigation} />
      </div>
    </header>
  );
};

const LargeHeaderController = ({ headerContent, ...restProps }) => {
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
      <LargeHeader headerContent={headerContent} {...restProps} />
      {isFixed && (
        <LargeFixedHeader headerContent={headerContent} {...restProps} />
      )}
    </>
  );
};

const SmallHeader = ({ headerContent, ...restProps }) => {
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
          {headerContent.pageTitle}
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
            <SocialLinks {...headerContent.social} />
          </div>
          <div>
            <LanguageLinks languages={headerContent.languages} />
          </div>
        </div>
        {menuIsOpen && (
          <BurgerMenu
            navigation={headerContent.navigation}
            onClick={() => setMenuIsOpen(false)}
          />
        )}
      </header>
    </>
  );
};

const BurgerMenu = ({ navigation, onClick, ...restProps }) => {
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
      <NavigationLinks navigation={navigation} onClick={onClick} />
    </div>
  );
};

const Header = ({ headerContent, ...restProps }) => {
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
            <LargeHeaderController
              headerContent={headerContent}
              {...restProps}
            />
          ) : (
            <SmallHeader headerContent={headerContent} {...restProps} />
          )}
        </div>
      )}
    </Measure>
  );
};

export default Header;

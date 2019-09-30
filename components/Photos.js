/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";
import Headline from "./Headline";

const Image = ({ uri, children = null, ...restProps }) => {
  return <div
    css={{
      backgroundImage: `url(${uri})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      paddingTop: "100%",
    }}
    {...restProps}
  >
    {children}
  </div>;
};

const Photos = ({ items, heading = null, ...restProps }) => {
  const shift = 2;
  return (
    <>
      { heading && <Headline level={2} css={{
          textAlign: "center",
          padding: theme.spacing,
          paddingTop: theme.spacing * 2,
          margin: 0,
          backgroundColor: theme.color.white,
          textTransform: "uppercase",
        }}>{heading}</Headline>}
      <div
        {...restProps}
        css={{
          backgroundColor: theme.color.black,
        }}
      >
        {items.map((item) => {
          if (item.items) {
            return <Photos {...item}/>;
          }
          return (
            <div key={item.uri} css={{
              width: "100%",
              height: `calc(100vh - ${theme.menuOffset}px)`,
              background: `url(${item.uri}) center center / contain no-repeat`,
              marginBottom: theme.spacing,
            }}/>
          );
        })}
      </div>
    </>
  );
};

export default Photos;

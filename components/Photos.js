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
          gridColumn: "1 / -1",
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
          gridColumn: "1 / -1",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridAutoFlow: "dense",
          backgroundColor: theme.color.black,
        }}
      >
        {items.map((item, itemIndex) => {
          const isSpanningLeft = (itemIndex % 6 === 0);
          const isSpanningRight = ((itemIndex + shift) % 6 === 0);
          const shouldSpan = isSpanningLeft || isSpanningRight;
          const spanStyle = {
            gridColumn: `span 2`,
            gridRow: `span 2`
          }
          if (item.items) {
            return <Photos {...item}/>;
          }
          return (
            <Image
              key={item.uri}
              uri={item.uri}
              css={{
                ...(shouldSpan ? spanStyle : {}),
                color: "white",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default Photos;

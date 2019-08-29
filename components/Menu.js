/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";
import Headline from "./Headline";
import JumpOffset from "./JumpOffset";


const MenuItem = ({ name, amount = null, price }) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "50px auto 50px",
        gridGap: theme.spacing / 2,
        paddingBottom: theme.spacing / 2,
        borderBottom: `2px solid ${theme.color.primaryLightest}`,
        marginBottom: theme.spacing / 2,
        breakInside: "avoid"
      }}
    >
      <div css={{ whiteSpace: "nowrap" }}>{amount}</div>
      <div>{name}</div>
      <div css={{ whiteSpace: "nowrap" }}>{price}</div>
    </div>
  );
};

const MenuGroup = ({ children = null, items, groupName, id }) => {
  return (
    <>
      {children}
      <Headline
        level={2}
        css={{
          marginTop: theme.spacing
        }}
        id={id}
      >
        {groupName}
      </Headline>
      <MenuList items={items} />
    </>
  );
};

const MenuList = ({ items }) => {
  return (
    <>
      {items.map(({id = null, ...item}, itemIndex) => {
        if (item.items && item.items.length > 0) {
          const jumpOffset = id ? <JumpOffset id={id} /> : null
          return <MenuGroup key={`${itemIndex}-${item.groupName}`} {...item} >{jumpOffset}</MenuGroup>;
        }
        if (item.name) {
          return <MenuItem key={`${itemIndex}-${item.name}`} {...item} />;
        }
        return item.content;
      })}
    </>
  );
};

const Menu = ({ items = [], children = null, ...restProps }) => {
  return (
    <div
        css={{
          padding: theme.spacing,
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            columnCount: 2,
            columnGap: theme.spacing * 2,
            maxWidth: 900,
            margin: `0 auto`,
          }
        }}
        {...restProps}
      >
        {children}
        <MenuList items={items} />
      </div>
  );
};

export default Menu;

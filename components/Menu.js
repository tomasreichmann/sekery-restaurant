/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";
import Headline from "./Headline";
import JumpOffset from "./JumpOffset";


export const MenuItem = ({
  id = null,
  name = "",
  children = null,
  amount = 100,
  amountUnit = "g",
  price = 0,
  priceUnit = "Kč",
}) => {
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
      <div css={{ whiteSpace: "nowrap" }}>{amount}&nbsp;{amountUnit}</div>
      <div>{name}</div>
      <div css={{ whiteSpace: "nowrap" }}>{price}&nbsp;{priceUnit}</div>
      {children}
    </div>
  );
};

export const MenuGroup = ({ children = null, items, groupName, id }) => {
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

const MenuList = ({ items, MenuItemComponent = MenuItem }) => {
  return (
    <>
      {items.map(({id = null, ...item}, itemIndex) => {
        if (item.items) {
          const jumpOffset = id ? <JumpOffset id={id} /> : null
          return <MenuGroup key={`${itemIndex}-${item.groupName}`} {...item} >{jumpOffset}</MenuGroup>;
        }
        if (item.name) {
          return <MenuItemComponent key={`${itemIndex}-${item.name}`} {...item} />;
        }
        return item.content;
      })}
    </>
  );
};

const Menu = ({ items = [], children = null, columnCount = 2, MenuItemComponent = MenuItem, ...restProps }) => {
  return (
    <div
        css={{
          padding: theme.spacing,
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            columnCount,
            columnGap: theme.spacing * 2,
            maxWidth: 900,
            margin: `0 auto`,
          }
        }}
        {...restProps}
      >
        {children}
        <MenuList items={items} MenuItemComponent={MenuItemComponent} />
      </div>
  );
};

export default Menu;

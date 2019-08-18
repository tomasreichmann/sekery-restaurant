/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";
import Headline from "./Headline";


const MenuItem = ({ name, amount = null, price }) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "50px auto 50px",
        gridGap: theme.spacing / 2,
        paddingBottom: theme.spacing / 2,
        borderBottom: `1px solid ${theme.color.border}`,
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

const MenuGroup = ({ items, groupName }) => {
  return (
    <>
      <Headline
        level={2}
        css={{
          marginTop: theme.spacing
        }}
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
      {items.map(item => {
        if (item.items && item.items.length > 0) {
          return <MenuGroup key={item.groupName} {...item} />;
        }
        if (item.name) {
          return <MenuItem key={item.name} {...item} />;
        }
        return item.content;
      })}
    </>
  );
};

const Menu = ({ items = [], ...restProps }) => {
  return (
    <div
        css={{
          padding: theme.spacing,
          columnCount: 3,
          columnGap: theme.spacing
        }}
        {...restProps}
      >
        <MenuList items={items} />
      </div>
  );
};

export default Menu;

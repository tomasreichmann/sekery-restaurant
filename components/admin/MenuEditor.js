/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import Menu from "../Menu";
import Headline from "../Headline";
import JumpOffset from "../JumpOffset";
import Input from "../controls/Input";
import Button from "../controls/Button";
import HR from "../HR";
import IconTrash from "../icons/IconTrash";

export const EditableMenuItem = ({
  id = null,
  name = "",
  nameEn = "",
  children = null,
  amount = 100,
  amountUnit = "g",
  price = 0,
  priceUnit = "Kč",
  setItem
}) => {
  const onPropChange = prop => value => {
    const item = {
      id,
      name,
      nameEn,
      amount,
      amountUnit,
      price,
      priceUnit
    };
    item[prop] = value;
    setItem(item);
  };
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "100px auto 100px",
        gridGap: theme.spacing / 2,
        alignItems: "start",
        paddingBottom: theme.spacing / 2,
        borderBottom: `2px solid ${theme.color.primaryLightest}`,
        marginBottom: theme.spacing / 2,
        breakInside: "avoid"
      }}
    >
      <div css={{ display: "flex", flexDirection: "row" }}>
        <Input
          onChange={onPropChange("amount")}
          value={amount}
          css={{
            flex: `1 1 ${String(amount).length}em`,
            width: "100%",
            textAlign: "right"
          }}
        />
        &nbsp;
        <Input
          onChange={onPropChange("amountUnit")}
          value={amountUnit}
          css={{ flex: `1 1 ${String(amountUnit).length}em`, width: "100%" }}
        />
      </div>
      <div css={{ gridRow: "span 2" }}>
        <Input
          onChange={onPropChange("name")}
          value={name}
          placeholder="Název položky"
          css={{ width: "100%", display: "block" }}
        />
        <Input
          onChange={onPropChange("nameEn")}
          value={nameEn}
          placeholder="Název položky EN"
          css={{ width: "100%", display: "block" }}
        />
      </div>
      <div css={{ display: "flex", flexDirection: "row" }}>
        <Input
          onChange={onPropChange("price")}
          value={price}
          css={{
            flex: `1 1 ${String(amount).length}em`,
            width: "100%",
            textAlign: "right"
          }}
        />
        &nbsp;
        <Input
          onChange={onPropChange("priceUnit")}
          value={priceUnit}
          css={{ flex: `1 1 ${String(amountUnit).length}em`, width: "100%" }}
        />
      </div>
      {children}
    </div>
  );
};

export const EditableMenuGroup = ({
  children = null,
  items = [],
  groupName = "",
  id = null,
  setGroup
}) => {
  const onPropChange = prop => value => {
    const item = {
      groupName,
      items
    };
    item[prop] = value;
    setGroup(item);
  };
  return (
    <>
      <Headline
        level={2}
        css={{
          marginTop: theme.spacing,
          display: "grid",
            gridTemplateColumns: "100px auto 100px",
            gridGap: theme.spacing / 2,
            gridAutoFlow: "dense",
            alignItems: "start"
        }}
        id={id}
      >
        <Input
          value={groupName}
          placeholder="Název skupiny"
          onChange={onPropChange("groupName")}
          css={{ gridColumn: 2 }}
        />
        {children}
      </Headline>
      {groupName.length > 0 && (
        <EditableMenuList items={items} setItems={onPropChange("items")} groupName={groupName}/>
      )}
    </>
  );
};

const EditableMenuList = ({ items, setItems, groupName = null }) => {
  const [newType, setNewType] = useState(null);

  let itemsWithNew = items;
  if (newType === "item") {
    itemsWithNew = [...items, { name: "" }];
  }
  if (newType === "group") {
    itemsWithNew = [...items, { groupName: "", items: [] }];
  }

  const setItem = index => item => {
    const newItems = [...items];
    newItems[index] = item;
    setNewType(null);
    setItems(newItems);
  };

  const removeItem = index => () => {
    const newItems = [...items.slice(0, index), ...items.slice(index + 1)];
    setItems(newItems);
  };

  const moveItem = (index, newIndex) => () => {
    const item = items[index];
    const itemsWithoutItem = [
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ];
    const newItems = [
      ...itemsWithoutItem.slice(0, newIndex),
      item,
      ...itemsWithoutItem.slice(newIndex)
    ];
    setItems(newItems);
  };

  const newFormControls = (
    <div>
      <Button disabled={newType === "item"} onClick={() => setNewType("item")}>
        Nová položka
      </Button>{" "}
      <Button
        disabled={newType === "group"}
        onClick={() => setNewType("group")}
      >
        Nová skupina
      </Button>
      { groupName && <>&nbsp;v {groupName}</>}
    </div>
  );

  return (
    <>
      {itemsWithNew.map(({ id = null, ...item }, itemIndex) => {
        const itemControls = itemIndex < items.length && (
          <>
            <div
              css={{
                gridColumn: 1,
                display: "flex",
                flexDirection: "row"
              }}
            >
              <Button
                disabled={itemIndex === 0}
                onClick={moveItem(itemIndex, 0)}
                css={{ flex: "1 1 auto", fontSize: "1rem" }}
              >
                ⤒
              </Button>
              <Button
                disabled={itemIndex === 0}
                onClick={moveItem(itemIndex, itemIndex - 1)}
                css={{ flex: "1 1 auto", fontSize: "1rem" }}
              >
                ↑
              </Button>
              <Button
                disabled={itemIndex >= items.length - 1}
                onClick={moveItem(itemIndex, itemIndex + 1)}
                css={{ flex: "1 1 auto", fontSize: "1rem" }}
              >
                ↓
              </Button>
              <Button
                disabled={itemIndex >= items.length - 1}
                onClick={moveItem(itemIndex, itemsWithNew.length - 1)}
                css={{ flex: "1 1 auto", fontSize: "1rem" }}
              >
                ⤓
              </Button>
            </div>
            <Button onClick={removeItem(itemIndex)} css={{ gridColumn: 3 }}>
              <IconTrash css={{ height: "1em" }} />
            </Button>
          </>
        );
        if (item.items !== undefined) {
          const jumpOffset = id ? <JumpOffset id={id} /> : null;
          return (
            <EditableMenuGroup
              key={`item-${itemIndex}`}
              id={`item-${itemIndex}`}
              {...item}
              setGroup={setItem(itemIndex)}
            >
              {jumpOffset}
              {itemControls}
            </EditableMenuGroup>
          );
        }
        if (item.name !== undefined) {
          return (
            <EditableMenuItem
              key={`item-${itemIndex}`}
              id={`item-${itemIndex}`}
              {...item}
              setItem={setItem(itemIndex)}
            >
              {itemControls}
            </EditableMenuItem>
          );
        }
        return item.content;
      })}
      {newFormControls}
      <HR />
    </>
  );
};

const EditableMenu = ({
  items = [],
  setItems,
  children = null,
  MenuItemComponent = EditableMenuItem,
  ...restProps
}) => {
  return (
    <div {...restProps}>
      {children}
      <EditableMenuList items={items} setItems={setItems} />
    </div>
  );
};

const MenuEditor = ({ items = [], setItems }) => {
  return (
    <div
      css={{
        [`@media (min-width: ${theme.breakpoint.large}px)`]: {
          display: "grid",
          // gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateColumns: "2fr 1fr",
          gridGap: theme.spacing
        }
      }}
    >
      <div>
        <EditableMenu items={items} setItems={setItems} />
      </div>
      {/* <div>
        <Menu items={presets} columnCount={1} MenuItemComponent={SelectableMenuItem}/>
      </div> */}
      <div>
        <Headline level={2}>Náhled</Headline>
        <Menu items={items} columnCount={1} css={{ padding: 0 }} />
      </div>
    </div>
  );
};

export default MenuEditor;

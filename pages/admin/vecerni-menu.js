/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import Page from "../../components/Page";
import Link from "next/link";
import theme from "../../config/theme";
import AdminNavigation from "../../components/AdminNavigation";
import Headline from "../../components/Headline";
import Menu, { MenuItem } from "../../components/Menu";
import Button from "../../components/controls/Button";
import MenuEditor from "../../components/admin/MenuEditor";
import sampleItems from "../../config/sampleItems";

const presets = [
  {
    name: "Svíčková na smetaně s houskovým knedlíkem",
    amount: 300,
    price: 120
  },
  { name: "Guláš s chlebem", amount: 250, price: 90 },
];

const SelectableMenuItem = ({ onClick = () => {}, ...restProps}) => {
  return <div css={{
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  }}><Button css={{
    marginBottom: theme.spacing,
    marginRight: theme.spacing/2,
  }}>&lt;</Button><MenuItem {...restProps} /></div>;
}

const EveningMenu = () => {
  const [menu, setMenu] = useState(sampleItems);
  return <Page title="Večerní menu">
    <AdminNavigation />
    <section css={{ padding: theme.spacing }}>
      <Headline level={1}>Večerní menu</Headline>
      <MenuEditor menu={menu} setMenu={setMenu}/>
    </section>
  </Page>
}

export default EveningMenu;

/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";

const MealMenu = () => {
  const items = [
    {
      groupName: "Polévky",
      items: [
        {
          name: "Dýňová polévka",
          amount: "200ml",
          price: "50 Kč"
        },
        {
          name: "Kuřecí vývar",
          amount: "200ml",
          price: "40 Kč"
        }
      ]
    },
    {
      groupName: "Hlavní jídla",
      items: [
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: "300g",
          price: "120 Kč"
        },
        { name: "Guláš s chlebem", amount: "250g", price: "90 Kč" },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: "200g",
          price: "140 Kč"
        }
      ]
    },
    {
      groupName: "Nápojový lístek",
      id: "napojovy-listek",
      items: [
        {
          name: "Kozel 10°",
          amount: "500ml",
          price: "35 Kč"
        },
        {
          name: "Matonni voda sycená",
          amount: "250ml",
          price: "20 Kč"
        }
      ]
    },
  ];
  return (
    <section css={{ marginBottom: theme.spacing * 2 }} id="jidelni-listek">
      <SectionHeader backgroundUrl="https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg">
        Jídelní lístek
      </SectionHeader>
      <Menu items={items} />
    </section>
  );
};

export default MealMenu;

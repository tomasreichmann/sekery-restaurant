/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";
import JumpOffset from "../JumpOffset";

const MealMenu = () => {
  const items = [
    {
      groupName: "Polévky",
      items: [
        {
          name: "Dýňová polévka",
          amount: 200,
          amountUnit: "ml",
          price: 50
        },
        {
          name: "Kuřecí vývar",
          amount: 200,
          amountUnit: "ml",
          price: 40
        }
      ]
    },
    {
      groupName: "Hlavní jídla",
      items: [
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        },
        {
          name: "Svíčková na smetaně s houskovým knedlíkem",
          amount: 300,
          price: 120
        },
        { name: "Guláš s chlebem", amount: 250, price: 90 },
        {
          name: "Kuřecí řízek s bramborovou kaší",
          amount: 200,
          price: 140
        }
      ]
    },
    {
      groupName: "Nápojový lístek",
      id: "napojovy-listek",
      items: [
        {
          name: "Kozel 10°",
          amount: 500,
          amountUnit: "ml",
          price: 35
        },
        {
          name: "Matonni voda sycená",
          amount: 250,
          amountUnit: "ml",
          price: 20
        }
      ]
    }
  ];
  return (
    <section css={{ marginBottom: theme.spacing * 2 }}>
      <JumpOffset id="jidelni-listek" />
      <SectionHeader backgroundUrl="https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg">
        Jídelní lístek
      </SectionHeader>
      <Menu items={items} />
    </section>
  );
};

export default MealMenu;

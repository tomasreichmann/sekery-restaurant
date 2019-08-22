/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";

const startOfWeekOffset = -1;

const getDayOfWeekWithOffset = (date, offset = startOfWeekOffset) => {
  return (date.getDay() + offset + 7) % 7;
};

const setDayOfWeekWithOffset = (
  date,
  dayOfWeek = 0,
  offset = startOfWeekOffset
) => {
  const dateDayOfWeek = getDayOfWeekWithOffset(date, offset);
  const dateDayOfMonth = date.getDate();
  const output = new Date(date);
  output.setDate(dateDayOfMonth - dateDayOfWeek + dayOfWeek);
  return output;
};

const today = new Date();

const thisWeek = [
  setDayOfWeekWithOffset(today, 0),
  setDayOfWeekWithOffset(today, 1),
  setDayOfWeekWithOffset(today, 2),
  setDayOfWeekWithOffset(today, 3),
  setDayOfWeekWithOffset(today, 4)
];

const dayOfWeekNames = [
  "Po",
  "Út",
  "St",
  "Čt",
  "Pá",
  "So",
  "Ne",
  // "Pondělí",
  // "Úterý",
  // "Středa",
  // "Čtvrtek",
  // "Pátek",
  // "Sobota",
  // "Neděle",
];

const DayButton = ({ date = new Date(), isActive = false }) => {
  const dayOfWeek = getDayOfWeekWithOffset(date);
  const dayName = dayOfWeekNames[dayOfWeek];
  return (
    <button
      css={{
        padding: theme.spacing / 2,
        ...theme.typography.h4,
        margin: 0,
        color: theme.color.textMuted,
        textTransform: "uppercase",
        // border: `1px solid ${theme.color.primaryLighter}`,
        boxShadow: theme.shadow.low,
        cursor: "pointer",
        backgroundColor: isActive ? theme.color.white : theme.color.primaryLightest,
        width: "3em",
        height: "3em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "50%",
        ":hover": {
          backgroundColor: theme.color.primaryLighter,
          color: theme.color.white,
        }
      }}
    >
      <span>{dayName}</span>
    </button>
  );
};

const DailyMenu = () => {
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
    }
  ];
  return (
    <section css={{ marginBottom: theme.spacing * 2 }}>
      <SectionHeader background="url(https://www.seriouseats.com/recipes/images/2014/12/20150110-beef-stroganoff-food-lab-28.jpg) center center / cover">Denní menu</SectionHeader>

      <Menu items={items} >
        <div
          css={{
            // padding: theme.spacing,
            display: "grid",
            gridTemplateColumns: `repeat(5, 1fr)`,
            gridGap: theme.spacing
          }}
        >
          {thisWeek.map((date, dayIndex) => (
            <DayButton key={dayIndex} date={date} isActive={dayIndex === 0}/>
          ))}
        </div>
        <div css={{
          textAlign: "center",
          ...theme.typography.h2,
        }} >22. 8. 2019</div>
      </Menu>
    </section>
  );
};

export default DailyMenu;

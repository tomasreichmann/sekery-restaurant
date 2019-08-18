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
  "Pondělí",
  "Úterý",
  "Středa",
  "Čtvrtek",
  "Pátek",
  "Sobota",
  "Neděle"
];

const DayButton = ({ date = new Date() }) => {
  const dayOfWeek = getDayOfWeekWithOffset(date);
  const dayName = dayOfWeekNames[dayOfWeek];
  return (
    <button
      css={{
        background: `${theme.color.primaryLighter}  ${dayOfWeek *
          100}% -10px url(/static/woodLighter.jpg)`,
        padding: theme.spacing / 2,
        textAlign: "center",
        ...theme.typography.h4,
        margin: 0,
        color: theme.color.textMuted,
        textTransform: "uppercase",
        border: `1px solid ${theme.color.primaryLighter}`,
        borderBottom: `2px solid ${theme.color.primary}`,
        boxShadow: theme.shadow.low,
        cursor: "pointer"
      }}
    >
      {dayName}&emsp;
      {date.getDate()}. {date.getMonth() + 1}.
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
      <SectionHeader>Denní menu</SectionHeader>
      <div
        css={{
          padding: theme.spacing,
          display: "grid",
          gridTemplateColumns: `repeat(5, 1fr)`,
          gridGap: theme.spacing
        }}
      >
        {thisWeek.map((date, dayIndex) => (
          <DayButton key={dayIndex} date={date} />
        ))}
      </div>
      <Menu items={items} />
    </section>
  );
};

export default DailyMenu;

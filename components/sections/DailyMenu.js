/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";
import JumpOffset from "../JumpOffset";
import sampleItems from "../../config/sampleItems";

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

const getStringDate = (date = new Date()) => {
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const dayOfMonth = `0${date.getDate()}`.slice(-2);
  return `${date.getFullYear()}-${month}-${dayOfMonth}`;
};
const getFormatedDate = date => {
  return `${date.getDate()}. ${date.getMonth() + 1}.`;
};

const dayOfWeekNames = [
  "Po",
  "Út",
  "St",
  "Čt",
  "Pá",
  "So",
  "Ne"
  // "Pondělí",
  // "Úterý",
  // "Středa",
  // "Čtvrtek",
  // "Pátek",
  // "Sobota",
  // "Neděle",
];

const DayButton = ({ date, isActive = false, onClick }) => {
  const dayOfWeek = getDayOfWeekWithOffset(new Date(date));
  const dayName = dayOfWeekNames[dayOfWeek];
  return (
    <button
      onClick={onClick}
      css={{
        padding: theme.spacing / 2,
        ...theme.typography.h4,
        margin: 0,
        color: theme.color.textMuted,
        textTransform: "uppercase",
        border: `1px solid ${theme.color.primaryLightest}`,
        cursor: "pointer",
        backgroundColor: isActive
          ? theme.color.white
          : theme.color.primaryLightest,
        width: "3em",
        height: "3em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "50%",
        ":hover, :focus": {
          backgroundColor: theme.color.primaryLighter,
          color: theme.color.white,
          outline: "none"
        }
      }}
    >
      <span>{dayName}</span>
    </button>
  );
};

const DailyMenu = () => {
  const now = new Date();
  const today = getStringDate(now);
  const thisWeek = [
    getStringDate(setDayOfWeekWithOffset(now, 0)),
    getStringDate(setDayOfWeekWithOffset(now, 1)),
    getStringDate(setDayOfWeekWithOffset(now, 2)),
    getStringDate(setDayOfWeekWithOffset(now, 3)),
    getStringDate(setDayOfWeekWithOffset(now, 4))
  ];
  const isTodayWeekDay = getDayOfWeekWithOffset(now) < 5;
  const [selectedDay, setSelectedDay] = useState(
    isTodayWeekDay ? today : thisWeek[0]
  );

  const items = sampleItems; // TODO!!!

  return (
    <section css={{ marginBottom: theme.spacing * 2 }}>
      <JumpOffset id="denni-menu" />
      <SectionHeader backgroundUrl="https://www.seriouseats.com/recipes/images/2014/12/20150110-beef-stroganoff-food-lab-28.jpg">
        Denní menu
      </SectionHeader>

      <Menu items={items}>
        <div
          css={{
            // padding: theme.spacing,
            display: "grid",
            gridTemplateColumns: `repeat(5, 1fr)`,
            justifyItems: "center"
          }}
        >
          {thisWeek.map(stringDate => (
            <DayButton
              key={stringDate}
              date={stringDate}
              isActive={selectedDay === stringDate}
              onClick={() => setSelectedDay(stringDate)}
            />
          ))}
        </div>
        <div
          css={{
            textAlign: "center",
            ...theme.typography.h2
          }}
        >
          {getFormatedDate(new Date(selectedDay))}
        </div>
      </Menu>
    </section>
  );
};

export default DailyMenu;

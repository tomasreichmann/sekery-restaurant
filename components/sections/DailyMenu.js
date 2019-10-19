/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useCallback } from "react";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";
import JumpOffset from "../JumpOffset";
import Loader from "../Loader";
import { getDailyMenu } from "../../firebase/firestore";
import Message from "../Message";

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

export const getStringDate = (date = new Date()) => {
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

const DailyMenu = ({
  sectionTitle = "Denní menu",
  headerImageUri = "https://i.imgur.com/lERQU2O.jpg",
  headerImageHeight = 469,
  noDailyMenu = "Tento den pro vás bohužel nemáme připravené denní menu.",
}) => {
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

  const getSelectedMenu = useCallback(() => {
    return getDailyMenu(selectedDay);
  }, [selectedDay]);

  const menuHeading = (
    <>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: `repeat(5, auto)`,
          gridGap: theme.spacing,
          justifyItems: "center",
          justifyContent: "center",
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
    </>
  );

  return (
    <section >
      <JumpOffset id="denni-menu" />
      <SectionHeader backgroundUrl={headerImageUri} css={{
        backgroundAttachment: "scroll",
        backgroundPosition: "center center",
        backgroundSize: "auto auto",
        height: headerImageHeight - theme.spacing * 2 ,
        minHeight: 0,
      }}>
        {sectionTitle}
      </SectionHeader>
      <div css={{ paddingTop: theme.spacing }}>{menuHeading}</div>
      <Loader task={getSelectedMenu}>
        {({ data: { items = [] } }) => {
          if (items.length === 0) {
            return (
              <div
                css={{
                  [`@media (min-width: ${theme.breakpoint.large}px)`]: {
                    columnGap: theme.spacing * 2,
                    maxWidth: 900,
                    margin: `0 auto`
                  }
                }}
              >
                <Message>
                  {noDailyMenu}
                </Message>
              </div>
            );
          }
          return <Menu items={items} columnCount={1} />;
        }}
      </Loader>
    </section>
  );
};

export default DailyMenu;

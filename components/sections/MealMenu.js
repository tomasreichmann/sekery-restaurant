/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";
import JumpOffset from "../JumpOffset";
import Loader from "../Loader";
import { getMealMenu } from "../../firestore/firestore";
import Message from "../Message";

const MealMenu = () => {
  return (
    <section css={{ marginBottom: theme.spacing * 2 }}>
      <JumpOffset id="jidelni-listek" />
      <SectionHeader backgroundUrl="https://cdn.pixabay.com/photo/2018/11/02/15/25/roast-goose-3790417_1280.jpg">
        Jídelní lístek
      </SectionHeader>
      <Loader task={getMealMenu}>
        {({ data: { items = []} }) => {
          if (items.length === 0) {
            return <Message>Nemáme pro vás zatím připravené stálé menu.</Message>
          }
          return <Menu items={items} />
        }}
      </Loader>
    </section>
  );
};

export default MealMenu;

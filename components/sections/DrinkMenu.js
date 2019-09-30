/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";
import JumpOffset from "../JumpOffset";
import Loader from "../Loader";
import { getDrinkMenu } from "../../firebase/firestore";
import Message from "../Message";

const DrinkMenu = () => {
  return (
    <section css={{ marginBottom: theme.spacing * 2 }}>
      <JumpOffset id="napojovy-listek" />
      <SectionHeader backgroundUrl="/static/napojovy-listek.jpg" css={{
        backgroundAttachment: "scroll",
        backgroundPosition: "center 88%",
        minHeight: 220,
      }}>
        Nápojový lístek
      </SectionHeader>
      <Loader task={getDrinkMenu}>
        {({ data: { items = []} } = { data: { items: []}}) => {
          if (items.length === 0) {
            return <Message>Nemáme pro vás zatím připravený nápojový lístek.</Message>
          }
          return <Menu items={items} columnCount={1} />
        }}
      </Loader>
    </section>
  );
};

export default DrinkMenu;

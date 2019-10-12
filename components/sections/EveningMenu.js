/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";
import JumpOffset from "../JumpOffset";
import Loader from "../Loader";
import { getEveningMenu } from "../../firebase/firestore";
import Message from "../Message";

const EveningMenu = () => {
  return (
    <section css={{ marginBottom: theme.spacing * 2 }}>
      <JumpOffset id="vecerni-menu" />
      <SectionHeader backgroundUrl="https://i.imgur.com/s5OtnWx.jpg" css={{
        backgroundAttachment: "scroll",
        backgroundPosition: "center center",
        backgroundSize: "auto auto",
        height: 505 - theme.spacing * 2 ,
        minHeight: 0,
      }}>
        Večerní menu
      </SectionHeader>
      <Loader task={getEveningMenu}>
        {({ data: { items = []} } = { data: { items: []}}) => {
          if (items.length === 0) {
            return <Message>Nemáme pro vás zatím připravené večerní menu.</Message>
          }
          return <Menu items={items} columnCount={1} />
        }}
      </Loader>
    </section>
  );
};

export default EveningMenu;

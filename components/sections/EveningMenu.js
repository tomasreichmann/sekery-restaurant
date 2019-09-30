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
      <SectionHeader backgroundUrl="/static/vecerni-menu.jpg" css={{
        backgroundAttachment: "scroll",
        backgroundPosition: "center 72%",
        minHeight: 450,
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

/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";
import JumpOffset from "../JumpOffset";
import Loader from "../Loader";
import { getDrinkMenu } from "../../firebase/firestore";
import Message from "../Message";

const DrinkMenu = ({
  sectionTitle = "Nápojový lístek",
  headerImageUri = "https://i.imgur.com/HwhHb5f.jpg",
  headerImageHeight = 347,
  noMenu = "Nemáme pro vás zatím připravený nápojový lístek.",
}) => {
  return (
    <section css={{ marginBottom: theme.spacing * 2 }}>
      <JumpOffset id="napojovy-listek" />
      <SectionHeader backgroundUrl={headerImageUri} css={{
        backgroundAttachment: "scroll",
        backgroundPosition: "center center",
        backgroundSize: "auto auto",
        height: headerImageHeight - theme.spacing * 2 ,
        minHeight: 0,
      }}>
        {sectionTitle}
      </SectionHeader>
      <Loader task={getDrinkMenu}>
        {({ data: { items = []} } = { data: { items: []}}) => {
          if (items.length === 0) {
            return <Message>{noMenu}</Message>
          }
          return <Menu items={items} columnCount={1} />
        }}
      </Loader>
    </section>
  );
};

export default DrinkMenu;

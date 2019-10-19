/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Menu from "../Menu";
import JumpOffset from "../JumpOffset";
import Loader from "../Loader";
import { getEveningMenu } from "../../firebase/firestore";
import Message from "../Message";

const EveningMenu = ({
  sectionTitle = "Večerní menu",
  headerImageUri = "https://i.imgur.com/s5OtnWx.jpg",
  headerImageHeight = 505,
  noMenu = "Nemáme pro vás zatím připravené večerní menu."
}) => {
  return (
    <section css={{ marginBottom: theme.spacing * 2 }}>
      <JumpOffset id="vecerni-menu" />
      <SectionHeader
        backgroundUrl={headerImageUri}
        css={{
          backgroundAttachment: "scroll",
          backgroundPosition: "center center",
          backgroundSize: "auto auto",
          height: headerImageHeight - theme.spacing * 2,
          minHeight: 0
        }}
      >
        {sectionTitle}
      </SectionHeader>
      <Loader task={getEveningMenu}>
        {({ data: { items = [] } } = { data: { items: [] } }) => {
          if (items.length === 0) {
            return <Message>{noMenu}</Message>;
          }
          return <Menu items={items} columnCount={1} />;
        }}
      </Loader>
    </section>
  );
};

export default EveningMenu;

/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import JumpOffset from "../JumpOffset";
import Markdown from "../controls/Markdown";

const Career = ({
  text = `Hledáme kuchaře a číšníky! Pokud máte zájem, zašlete nám prosím Váš životopis na email.

  Děkujeme

  [prace@sekeryrestaurant.cz](mailto:prace@sekeryrestaurant.cz)`
}) => {
  return (
    <section
      css={{ marginBottom: theme.spacing * 2 }}
    >
      <JumpOffset id="pracovni-prilezitosti"/>
      <div
        css={{
          padding: theme.spacing,
          textAlign: "center",
          fontSize: theme.fontSize.h3
        }}
      >
        <Markdown source={text} />
      </div>
    </section>
  );
};

export default Career;

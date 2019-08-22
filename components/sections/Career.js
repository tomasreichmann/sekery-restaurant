/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import A from "../A";

const Career = () => {
  return (
    <section
      css={{ marginBottom: theme.spacing * 2 }}
    >
      <SectionHeader>Pracovní příležitosti</SectionHeader>
      <div
        css={{
          padding: theme.spacing,
          textAlign: "center",
          fontSize: theme.fontSize.h3,
        }}
      >
        <p>Hledáme kuchaře a číšníky! Pokud máte zájem, zašlete nám prosím Váš životopis na email. <br />Děkujeme</p>

        <p><A href="prace@sekeryrestaurant.cz">
          prace@sekeryrestaurant.cz
        </A></p>
      </div>
    </section>
  );
};

export default Career;

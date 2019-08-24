/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import A from "../A";

const Career = () => {
  return (
    <section
      id="pracovni-prilezitosti"
      css={{ marginBottom: theme.spacing * 2 }}
    >
      <SectionHeader
        backgroundUrl="http://www.smichovskeuzeniny.cz/images/splash-maloobchod.jpg"
        css={{
          backgroundAttachment: "scroll"
        }}
      >
        Pracovní příležitosti
      </SectionHeader>
      <div
        css={{
          padding: theme.spacing,
          textAlign: "center",
          fontSize: theme.fontSize.h3
        }}
      >
        <p>
          Hledáme kuchaře a číšníky! Pokud máte zájem, zašlete nám prosím Váš
          životopis na email.
        </p>
        <p>
          Děkujeme
        </p>

        <p>
          <A href="prace@sekeryrestaurant.cz">prace@sekeryrestaurant.cz</A>
        </p>
      </div>
    </section>
  );
};

export default Career;

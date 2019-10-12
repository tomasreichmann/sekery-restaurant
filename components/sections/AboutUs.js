/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Headline from "../Headline";
import JumpOffset from "../JumpOffset";

const AboutUs = () => {
  return (
    <section
      css={{
        marginBottom: theme.spacing * 2,
      }}
    >
      <JumpOffset id="o-nas"/>
      <SectionHeader backgroundUrl="https://i.imgur.com/aryuWJR.jpg" css={{
        backgroundAttachment: "scroll",
        backgroundPosition: "center center",
        backgroundSize: "auto auto",
        height: 600 - theme.spacing * 2 ,
        minHeight: 0,
      }}>O nás</SectionHeader>
      <div
        css={{
          padding: theme.spacing,
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gridGap: theme.spacing,
          }
        }}
      >
        <div>
          <Headline level={4} >Založeno 1875</Headline>
          <Headline level={4} >Denně čerstvé suroviny vlastní výroby</Headline>
          <Headline level={4} >Zvěřina nejlepší kvality</Headline>
          <p>
            Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a
            knihařském průmyslu. Lorem Ipsum je považováno za standard v této
            oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy
            textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz
            nevydržel pouze pět století, on přežil i nástup elektronické sazby v
            podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v
            šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s
            jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus
            PageMaker.
          </p>
        </div>
        <div>
          <img css={{ width: "100%" }} src="https://i.imgur.com/NXerfN2.jpg" />

        </div>
      </div>
    </section>
  );
};

export default AboutUs;

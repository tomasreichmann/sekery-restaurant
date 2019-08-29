/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Headline from "../Headline";

const AboutUs = () => {
  return (
    <section
      id="o-nas"
      css={{ marginBottom: theme.spacing * 2 }}
    >
      <SectionHeader backgroundUrl="https://cdn.pixabay.com/photo/2018/02/08/15/02/meat-3139641_1280.jpg">O nás</SectionHeader>
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
          <img css={{ width: "100%" }} src="https://live.staticflickr.com/4172/33888596210_decfe3e063_b.jpg" />

        </div>
      </div>
    </section>
  );
};

export default AboutUs;

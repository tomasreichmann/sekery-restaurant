/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";

const AboutUs = () => {
  return (
    <section
      css={{ marginBottom: theme.spacing * 2 }}
    >
      <SectionHeader>O nás</SectionHeader>
      <div
        css={{
          padding: theme.spacing,
          columns: 3,
          columnGap: theme.spacing
        }}
      >
        Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a
        knihařském průmyslu. Lorem Ipsum je považováno za standard v této
        oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy
        textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz
        nevydržel pouze pět století, on přežil i nástup elektronické sazby v
        podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v
        šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s
        jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus
        PageMaker. Lorem Ipsum je demonstrativní výplňový text používaný v
        tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard
        v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal
        kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho
        odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby
        v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v
        šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s
        jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus
        PageMaker. Lorem Ipsum je demonstrativní výplňový text používaný v
        tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard
        v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal
        kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho
        odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby
        v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v
        šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s
        jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus
        PageMaker.
      </div>
    </section>
  );
};

export default AboutUs;

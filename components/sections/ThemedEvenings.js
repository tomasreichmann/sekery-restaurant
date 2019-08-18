/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";

const ThemedItem = ({ children, imageUri = null }) => {
  return <div>
    {imageUri && <img src={imageUri} alt="" css={{
      width: "100%",
      marginBottom: theme.spacing,
    }}/>}
    {children}
  </div>
}
const ThemedEvenings = () => {
  return (
    <section css={{ marginTop: -theme.spacing * 2, marginBottom: theme.spacing * 2 }}>
      <div
        css={{
          padding: theme.spacing,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: theme.spacing,
          alignItems: "flex-start",
        }}
      >
        <ThemedItem imageUri="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Slimming-Worlds-roast-dinner-1220x803.jpg" >
          Popis akce... Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker.
        </ThemedItem>
        <ThemedItem imageUri="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Slimming-Worlds-roast-dinner-1220x803.jpg" >
          Popis akce... Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker.
        </ThemedItem>
        <ThemedItem imageUri="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Slimming-Worlds-roast-dinner-1220x803.jpg" >
          Popis akce... Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker.
        </ThemedItem>
      </div>
    </section>
  );
};

export default ThemedEvenings;

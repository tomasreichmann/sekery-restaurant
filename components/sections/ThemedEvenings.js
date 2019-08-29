/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import Headline from "../Headline";

const ThemedItem = ({ children, imageUri = null }) => {
  return <div css={{
    [`@media (min-width: ${theme.breakpoint.large}px)`]: {
      width: "33%",
    },
    padding: theme.spacing / 2,
    boxSizing: "border-box",
  }}>
    {imageUri && <img src={imageUri} alt="" css={{
      width: "100%",
    }}/>}
    {children}
  </div>
}
const ThemedEvenings = () => {
  return (
    <section css={{ marginTop: -theme.spacing * 2, marginBottom: theme.spacing * 2 }} id="tematicke-vecery">
      <div
        css={{
          padding: `${theme.spacing /2}px ${theme.spacing / 2}px`,
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }
        }}
      >
        <ThemedItem imageUri="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Slimming-Worlds-roast-dinner-1220x803.jpg" >
          <Headline level={3} >Název akce</Headline>
          <p>Popis akce... Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker.</p>
        </ThemedItem>
        <ThemedItem imageUri="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Slimming-Worlds-roast-dinner-1220x803.jpg" >
          <Headline level={3} >Název akce</Headline>
          <p>Popis akce... Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker.</p>
        </ThemedItem>
      </div>
    </section>
  );
};

export default ThemedEvenings;

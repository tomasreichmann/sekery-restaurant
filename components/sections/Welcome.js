/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import JumpOffset from "../JumpOffset";
import Markdown from "../controls/Markdown";

const Welcome = ({
  imageUri = "https://i.imgur.com/vZ3rsXU.jpg",
  textMd = `
# Vítejte v naší tradiční řeznické restauraci SEKERY na Andělu.

Náš restaurant SEKERY je zatím poslední realizací našeho
rodinnéhořeznictví Kratochvíl. Tradice řeznictví Kratochvíl započala v
našírodině již roku 1875, kdy můj pra pra pra dědeček František
Kratochvíl otevřel na Smíchově své řeznictví. V roce 1904 převzal
úspěšně řeznictví můj pra pra děda František Kratochvíl a vedl ho až
do roku 1948. V tomto roce ho "zabavil" komunistický režim a pra pra
děda byl přinucen vyměnit řezničinu za práci v huti na Kladně.
Řeznickému řemeslu však zůstal věrný a ve volném čase se věnoval
"rodinným" zabijačkám. Po pádu režimu se k řeznickému řemeslu v roce
1992 přidal i můj otecFrantišek Kratochvíl a "vrátil" naše tradiční
řeznictví na výslunní. Jako vášnivý myslivec navíc přidal do nabídky
zvěřinu a značně rozšířil výrobnu. V roce 2017 jsem převzal řeznictví
já a navazuji s hrdostí na naši dlouholetou tradici. Každý Kratochvíl
naše řeznictví posílil a posunul dál. Ani já tak nezůstávám pozadu a
věřím, že naše nová restaurace / řeznická jídelna SEKERY si brzy získá
své spokpojené hostya štamgasty. Přijďte i vy ochutnat kus české
tradice k nám na Anděl.

Těším se na vás.

Michal František Kratochvíl
  `
}) => {
  return (
    <section
      css={{
        marginBottom: theme.spacing * 2
      }}
    >
      <JumpOffset id="vitejte" />
      <img
        src={imageUri}
        alt=""
        css={{ width: "100%" }}
      />
      <div
        css={{
          padding: theme.spacing,
          textAlign: "center",
        }}
      >
        <Markdown source={textMd} />
      </div>
    </section>
  );
};

export default Welcome;

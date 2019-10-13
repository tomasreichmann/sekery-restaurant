/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import JumpOffset from "../JumpOffset";
import Markdown from "../controls/Markdown";

const AboutUs = ({
  sectionTitle = "O nás",
  imageUri = "https://i.imgur.com/NXerfN2.jpg",
  headerImageUri = "https://i.imgur.com/aryuWJR.jpg",
  headerImageHeight = 600,
  textMd = `
Náš restaurant SEKERY je zatím poslední realizací našeho
rodinnéhořeznictví Kratochvíl. Tradice řeznictví Kratochvíl započala v
našírodině již roku 1875, kdy můj pra pra pra dědeček František
Kratochvíl otevřel na Smíchově své řeznictví. V roce 1904 převzal
úspěšně řeznictví můj pra pra děda František Kratochvíl a vedl ho až
do roku 1948. V tomto roce ho "zabavil" komunistický režim a pra pra
děda byl přinucen vyměnit řezničinu za práci v huti na Kladně.
Řeznickému řemeslu však zůstal věrný a ve volném čase se věnoval
"rodinným" zabijačkám. Po pádu režimu se k řeznickému řemeslu v roce
1992 přidal i můj otec František Kratochvíl a "vrátil" naše tradiční
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
      <JumpOffset id="o-nas" />
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
      <div
        css={{
          padding: theme.spacing,
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gridGap: theme.spacing
          }
        }}
      >
        <div>
          <Markdown source={textMd} />
        </div>
        <div>
          <img css={{ width: "100%" }} src={imageUri} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import A from "../A";

const Footer = () => {
  return (
    <section >
      <div
        css={{
          padding: theme.spacing,
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "stretch",
          gridGap: theme.spacing,
          [`@media (min-width: ${theme.breakpoint.small}px)`]: {
            height: 150,
            gridTemplateColumns: "1fr 1fr 1fr",
          },
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            height: 200,
          },
        }}
        >
        <A href="http://smichovske-uzeniny.cz" css={{
          height: 150,
          background: `url(/static/smichovske-uzeniny.png) center center / cover`
        }} title="Smíchovské uzeniny"></A>
        <A href="http://andel-catering.cz"  css={{
          height: 150,
          background: `url(/static/andel-catering.png) center center / cover`
        }} title="Anděl Catering"></A>
        <A href="http://zverina-praha.cz"  css={{
          height: 150,
          background: `url(/static/zverina-praha.png) center center / cover`
        }} title="Zvěřina Praha"></A>
      </div>
    </section>
  );
};

export default Footer;

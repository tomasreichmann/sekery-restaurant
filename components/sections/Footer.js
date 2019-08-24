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
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "stretch",
          gridGap: theme.spacing,
          minHeight: 200,
        }}
      >
        <A href="http://smichovske-uzeniny.cz" css={{
          background: `url(/static/smichovske-uzeniny.png) center center / cover`
        }} title="Smíchovské uzeniny"></A>
        <A href="http://andel-catering.cz"  css={{
          background: `url(/static/andel-catering.png) center center / cover`
        }} title="Anděl Catering"></A>
        <A href="http://zverina-praha.cz"  css={{
          background: `url(/static/zverina-praha.png) center center / cover`
        }} title="Zvěřina Praha"></A>
      </div>
    </section>
  );
};

export default Footer;

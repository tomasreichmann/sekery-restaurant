/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import A from "../A";

const Footer = () => {
  return (
    <section>
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
            gridTemplateColumns: "1fr 1fr 1fr"
          },
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            height: 200
          }
        }}
      >
        <A href="http://smichovske-uzeniny.cz" title="Smíchovské uzeniny">
          <img
            src="/static/smichovske-uzeniny.png"
            alt=""
            css={{ width: "100%", maxWidth: 200 }}
          />
        </A>
        <A href="http://andel-catering.cz" title="Anděl Catering">
          <img src="/static/andel-catering.png" alt="" css={{ width: "100%", maxWidth: 200 }} />
        </A>
        <A href="http://zverina-praha.cz" title="Zvěřina Praha">
          <img src="/static/zverina-praha.png" alt="" css={{ width: "100%", maxWidth: 200 }} />
        </A>
      </div>
    </section>
  );
};

export default Footer;

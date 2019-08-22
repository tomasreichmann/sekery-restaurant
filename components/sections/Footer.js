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
          gridTemplateColumns: "1fr 1fr",
          alignItems: "flex-start",
          gridGap: theme.spacing
        }}
      >
        <A href="http://smichovske-uzeniny.cz" >Smíchovské uzeniny</A>
        <A href="http://andel-catering.cz" >Anděl Catering</A>
      </div>
    </section>
  );
};

export default Footer;

/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import A from "../A";

const Footer = ({
  links = [
    {
      title: "Smíchovské uzeniny",
      href: "http://smichovske-uzeniny.cz",
      imageUri: "/static/smichovske-uzeniny.png",
    },
    {
      title: "Anděl Catering",
      href: "http://andel-catering.cz",
      imageUri: "/static/andel-catering.png",
    },
    {
      title: "Zvěřina Praha",
      href: "http://zverina-praha.cz",
      imageUri: "/static/zverina-praha.png",
    }
  ]
}) => {
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
        {links.map(({ href = "", title = "", imageUri = "" } = { href: "", title: "", imageUri: "" }) => {
          return (
            <A href={href} title={title} key={href}>
              <img
                src={imageUri}
                alt=""
                css={{ width: "100%", maxWidth: 200 }}
              />
            </A>
          );
        })}
      </div>
    </section>
  );
};

export default Footer;

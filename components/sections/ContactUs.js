/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Headline from "../Headline";
import A from "../A";
import P from "../P";
import JumpOffset from "../JumpOffset";

const ContactUs = ({...restProps}) => {
  return (
    <section
      css={{
        marginBottom: theme.spacing * 2
      }}
      {...restProps}
    >
      <JumpOffset id="kontakt"/>
      <SectionHeader
        backgroundUrl="/static/smichovske-uzeniny-street.png"
      >
        Kontakt
      </SectionHeader>
      <div
        css={{
          padding: theme.spacing,
          paddingTop: theme.spacing * 2,
          [`@media (min-width: ${theme.breakpoint.large}px)`]: {
            display: "grid",
            alignItems: "stretch",
            justifyItems: "stretch",
            gridGap: theme.spacing,
            gridTemplateColumns: "1fr 1fr 1fr"
          }
        }}
      >
        <iframe
          src="https://api.mapy.cz/frame?params=%7B%22x%22%3A14.405437469482422%2C%22y%22%3A50.070068359375%2C%22base%22%3A%221%22%2C%22layers%22%3A%5B%5D%2C%22zoom%22%3A17%2C%22url%22%3A%22https%3A%2F%2Fmapy.cz%2Fs%2F3y5jp%22%2C%22mark%22%3A%7B%22x%22%3A%2214.405437469482422%22%2C%22y%22%3A%2250.070068359375%22%2C%22title%22%3A%22Michal%20Kratochv%C3%ADl%22%7D%2C%22overview%22%3Atrue%7D&amp;width=500&amp;height=333&amp;lang=cs"
          css={{ border: "none", width: "100%", height: 300 }}
          frameBorder="0"
        />
        <div>
          <Headline level={2}>Sekery Restaurant</Headline>

          <address
            css={{
              ...theme.typography.body,
              marginBottom: theme.spacing / 2
            }}
          >
            Nádražní 56/106,
            <br />
            150 00 Praha 5 - Anděl
          </address>

          <Headline level={3}>
            <A href="tel:+420602261212">+420 602 26 12 12</A>
          </Headline>

          <Headline level={3}>Otevírací doba</Headline>
          <P>PO-PÁ 8-15 17-22</P>
          <P>
            IČ 123456789
            <br />
            DIČ CZ123456789
          </P>
        </div>
        <div>
          <img
            src="https://d48-a.sdn.szn.cz/d_48/c_img_H_D/vWzTwk.jpeg?fl=res,400,225,3"
            css={{ width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import JumpOffset from "../JumpOffset";
import Markdown from "../controls/Markdown";

const ContactUs = ({
  sectionTitle = "Kontakt",
  headerImageHeight = 240,
  headerImageUri = "/static/kontakty.jpg",
  bodyImageUri = "https://d48-a.sdn.szn.cz/d_48/c_img_H_D/vWzTwk.jpeg?fl=res,400,225,3",
  mapUri = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.213813284941!2d14.407002816002622!3d50.0635572794239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b945b718c8599%3A0x37a8f98c5f5df24c!2zTsOhZHJhxb5uw60gNzQwLzU2LCAxNTAgMDAgUHJhaGEgNS1TbcOtY2hvdg!5e0!3m2!1scs!2scz!4v1570902497182!5m2!1scs!2scz",
  text = `## Sekery Restaurant

Nádražní 56/106,
150 00 Praha 5 - Anděl

[+420 602 26 12 12](tel:+420602261212)

### Otevírací doba
PO-PÁ 6:30-18:30

IČ 69823987
DIČ CZ7504100186`,
  ...restProps
}) => {
  return (
    <section
      css={{
        marginBottom: theme.spacing * 2
      }}
      {...restProps}
    >
      <JumpOffset id="kontakt" />
      <SectionHeader
        backgroundUrl={headerImageUri}
        css={{
          backgroundSize: "auto 100%",
          height: headerImageHeight - theme.spacing * 2
        }}
      >
        {sectionTitle}
      </SectionHeader>
      <div
        css={{
          padding: theme.spacing,
          paddingTop: theme.spacing * 2,
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
          src={mapUri}
          css={{ border: 0, height: 300, width: "100%" }}
        />
        <div>
          <Markdown source={text} />
        </div>
        <div>
          <img
            src={bodyImageUri}
            css={{ width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

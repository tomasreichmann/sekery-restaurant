/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../config/theme";
import SectionHeader from "../SectionHeading";
import Headline from "../Headline";
import JumpOffset from "../JumpOffset";

const Welcome = () => {
  return (
    <section
      css={{
        marginBottom: theme.spacing * 2,
      }}
    >
      <JumpOffset id="vitejte"/>
      <div css={{
        background: `url(/static/welcome.jpg) center -8vw no-repeat`,
        backgroundSize: "100%",
        height: "50vw",
      }} />
      <div
        css={{
          padding: theme.spacing,
          textAlign: "center",
        }}
      >
        <Headline level={1} >Vítejte v rodinné řeznické jídelne na Andělu</Headline>
      </div>
    </section>
  );
};

export default Welcome;

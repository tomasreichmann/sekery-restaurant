/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../config/theme";

const JumpOffset = ({ id, offset = theme.menuOffset }) => {
  return <span id={id} css={{
    display: "block",
    position: "absolute",
    pointerEvents: "none",
    zIndex: -1,
    marginBottom: offset,
    marginTop: -offset,
    visibility: "hidden",
  }} />
}

export default JumpOffset;

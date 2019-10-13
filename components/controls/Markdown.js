import React from "react";
import Headline from "../Headline";
const ReactMarkdown = require("react-markdown");

const Markdown = ({ source, ...restProps }) => {
  return <ReactMarkdown source={source} renderers={{ heading: Headline }} {...restProps}/>;
};

export default Markdown;
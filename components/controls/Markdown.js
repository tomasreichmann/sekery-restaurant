import React from "react";
import Headline from "../Headline";
import A from "../A";
const ReactMarkdown = require("react-markdown");

const Markdown = ({ source, ...restProps }) => {
  return <ReactMarkdown source={source} renderers={{
    heading: Headline,
    link: A
  }} {...restProps}/>;
};

export default Markdown;
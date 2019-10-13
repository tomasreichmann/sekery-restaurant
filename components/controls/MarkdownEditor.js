import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const MarkdownEditor = ({ value, onChange, options = {}, ...restProps }) => {
  return <SimpleMDE value={value} onChange={onChange} options={{ spellChecker: false, ...options }} {...restProps}/>;
};

export default MarkdownEditor;
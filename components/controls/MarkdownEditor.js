import React from "react";
import SimpleMDE from "react-simplemde-editor";

const MarkdownEditor = ({ value, onChange, options = {}, ...restProps }) => {
  return <SimpleMDE value={value} onChange={onChange} options={{ spellChecker: false, ...options }} {...restProps}/>;
};

export default MarkdownEditor;
/** @jsx jsx */
import { useCallback } from "react";
import { jsx } from "@emotion/core";

import theme from "../../config/theme";
import Input from "../controls/Input";
import Headline from "../Headline";
import Welcome from "../sections/Welcome";
import MarkdownEditor from "../controls/MarkdownEditor";

const passAsIs = props => props;

const defaultModel = [
  {
    prop: "imageUri",
    label: "Adresa obrázku",
    editor: Input,
    getEditorProps: passAsIs,
  },
  {
    prop: "textMd",
    label: "Text",
    editor: MarkdownEditor,
    getEditorProps: passAsIs,
  }
];

const NumberInput = (props) => {
  return <Input type="number" {...props}/>
}

const editorMap = {
  "Input": Input,
  "Number": NumberInput,
  "MarkdownEditor": MarkdownEditor,
};

const ContentEditor = ({
  model = defaultModel,
  Preview = Welcome,
  data = {},
  onChange = (data) => {
    console.log('onChange', data);
    return Promise.resolve("OK");
  },
  ...restProps
}) => {
  const getEditorPropOnChange = useCallback(
    prop => propValue => {
      onChange({
        ...data,
        [prop]: propValue
      });
    },
    [data]
  );

  return (
    <section
      css={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: theme.spacing
      }}
      {...restProps}
    >
      <div>
        {model.map(({ editor, editorName = "Input", label, getEditorProps = passAsIs, prop }) => {
          const EditorComponent = editor || editorMap[editorName] || null;
          return (
            <div key={prop}>
              {label && (
                <Headline level={3}>{label}</Headline>
              )}
              {EditorComponent && (
                <EditorComponent
                  {...getEditorProps({
                    value: data[prop],
                    onChange: getEditorPropOnChange(prop)
                  })}
                />
              )}
            </div>
          );
        })}
      </div>
      <Preview {...data} />
    </section>
  );
};

export default ContentEditor;

/** @jsx jsx */
import React, { useCallback } from "react";
import { jsx } from "@emotion/core";

import theme from "../../config/theme";
import Input from "../controls/Input";
import Headline from "../Headline";
import MarkdownEditor from "../controls/MarkdownEditor";
import Button from "../controls/Button";
import IconTrash from "../icons/IconTrash";

const passAsIs = props => props;

const defaultModel = [];

const NumberInput = props => {
  return <Input type="number" {...props} />;
};

const EditorItem = ({
  prop,
  value,
  onChange,
  label,
  getEditorProps,
  editorProps,
  editor,
  editorName
}) => {
  const defaultEditorProps = {
    value,
    onChange
  };
  const composedEditorProps = getEditorProps
    ? getEditorProps(defaultEditorProps)
    : passAsIs({ ...defaultEditorProps, ...editorProps });

  const EditorComponent = editor || editorMap[editorName] || null;
  return (
    <div key={prop}>
      {label && <Headline level={3}>{label}</Headline>}
      {EditorComponent && <EditorComponent {...composedEditorProps} />}
    </div>
  );
};

const ObjectEditor = ({ value = {}, onChange, model }) => {
  const getEditorPropOnChange = useCallback(
    prop => propValue => {
      onChange({
        ...value,
        [prop]: propValue
      });
    },
    [value]
  );

  return (
    <>
      {model.map(modelItem => {
        return (
          <EditorItem
            key={modelItem.prop}
            value={value[modelItem.prop]}
            onChange={getEditorPropOnChange(modelItem.prop)}
            {...modelItem}
          />
        );
      })}
    </>
  );
};

const ArrayEditor = ({
  value = [],
  onChange,
  model,
  maxItems = null,
}) => {

  const getEditorPropOnChange = useCallback(
    index => propValue => {
      const newValue = [...value];
      newValue[index] = propValue;
      onChange(newValue);
    },
    [value]
  );

  const removeItem = useCallback(
    index => {
      onChange([...value.slice(0, index), ...value.slice(index + 1)]);
    },
    [value]
  );

  const moveItem = (index, newIndex) => () => {
    const item = value[index];
    const itemsWithoutItem = [
      ...value.slice(0, index),
      ...value.slice(index + 1)
    ];
    const newItems = [
      ...itemsWithoutItem.slice(0, newIndex),
      item,
      ...itemsWithoutItem.slice(newIndex)
    ];
    onChange(newItems);
  };

  return (
    <>
      <div
        css={{
          marginTop: theme.spacing,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gridGap: theme.spacing / 2,
          alignItems: "start"
        }}
      >
        {value.map((item, itemIndex) => {
          return (
            <React.Fragment key={itemIndex}>
              <div
                css={{
                  gridColumn: 1,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Button
                  disabled={itemIndex === 0}
                  onClick={moveItem(itemIndex, 0)}
                  css={{ flex: "1 1 auto", fontSize: "1rem" }}
                >
                  ⤒
                </Button>
                <Button
                  disabled={itemIndex === 0}
                  onClick={moveItem(itemIndex, itemIndex - 1)}
                  css={{ flex: "1 1 auto", fontSize: "1rem" }}
                >
                  ↑
                </Button>
                <Button
                  disabled={itemIndex >= value.length - 1}
                  onClick={moveItem(itemIndex, itemIndex + 1)}
                  css={{ flex: "1 1 auto", fontSize: "1rem" }}
                >
                  ↓
                </Button>
                <Button
                  disabled={itemIndex >= value.length - 1}
                  onClick={moveItem(itemIndex, value.length)}
                  css={{ flex: "1 1 auto", fontSize: "1rem" }}
                >
                  ⤓
                </Button>
              </div>
              <EditorItem
                value={item}
                onChange={getEditorPropOnChange(itemIndex)}
                {...model}
              />
              <Button
                onClick={() => removeItem(itemIndex)}
                css={{ gridColumn: 3 }}
              >
                <IconTrash css={{ height: "1em" }} />
              </Button>
            </React.Fragment>
          );
        })}
      </div>
      {(maxItems === null || value.length < maxItems) && (
        <Button
          onClick={() => getEditorPropOnChange(value.length)()}
        >
          +
        </Button>
      )}
    </>
  );
};

const editorMap = {
  Input: Input,
  Number: NumberInput,
  Markdown: MarkdownEditor,
  Array: ArrayEditor,
  Object: ObjectEditor,
};

const ContentEditor = ({
  model = defaultModel,
  Preview = null,
  data = {},
  onChange,
  RootEditor = ObjectEditor,
  ...restProps
}) => {
  return (
    <section
      css={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${theme.breakpoint.large / 2}px, 1fr))`,
        gridGap: theme.spacing
      }}
      {...restProps}
    >
      <div>
        <RootEditor model={model} value={data} onChange={onChange} />
      </div>
      {Preview && <Preview {...data} />}
    </section>
  );
};

export default ContentEditor;

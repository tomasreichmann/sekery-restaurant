/** @jsx jsx */
import { useState, useCallback, useEffect } from "react";
import { jsx } from "@emotion/core";
import isEqual from "lodash/isEqual";

import theme from "../../config/theme";
import Button from "../controls/Button";
import { LoaderBody, InlineLoader } from "../Loader";

const SaveWrapperBody = ({
  unsavedData,
  saveState,
  dataState,
  onSave,
  onChange,
  children,
}) => {
  return (
    <LoaderBody state={dataState}>
      {({ data }) => {
        return (
          <>
            <div>
              <Button onClick={() => onChange(saveState.data)} disabled={!unsavedData}>
                Zahodit změny
              </Button>&ensp;
              <Button onClick={() => onSave(dataState.data)} disabled={!unsavedData}>
                Uložit
              </Button>{" "}
              {unsavedData && "Neuloženo"}{" "}
              {saveState.isLoading && <InlineLoader />}
              {saveState.error && (
                <p css={{ marginTop: theme.spacing }}>
                  Při ukládání došlo k chybě: {JSON.stringify(saveState.error)}
                </p>
              )}
            </div>
            {children({ data, onChange })}
          </>
        );
      }}
    </LoaderBody>
  );
};

const SaveWrapperController = ({
  getData,
  setData,
  children,
}) => {
  const [dataState, setDataState] = useState({
    isLoading: true,
    error: null,
    data: null
  });
  const [saveState, setSaveState] = useState({
    isLoading: false,
    error: null,
    data: null
  });

  useEffect(() => {
    setDataState({
      isLoading: true,
      error: null,
      data: null
    });
    setSaveState({
      isLoading: false,
      error: null,
      data: null
    });
    getData()
      .then(data => {
        setDataState({
          isLoading: false,
          error: null,
          data
        });
        setSaveState({
          isLoading: false,
          error: null,
          data
        });
      })
      .catch(error => {
        setDataState({
          isLoading: false,
          error,
          data: null
        });
      });
  }, [getData]);

  const onSave = useCallback(
    data => {
      setSaveState({ ...saveState, isLoading: true });

      setData(data)
        .then(() => {
          setSaveState({ isLoading: false, error: null, data });
        })
        .catch(error => {
          setSaveState({ ...saveState, isLoading: false, error });
        });
    },
    [saveState]
  );

  const onChange = useCallback(
    data => {
      setDataState({ ...dataState, data });
    },
    [dataState]
  );

  const unsavedData =
    !saveState.isLoading &&
    !dataState.isLoading &&
    !isEqual(dataState.data, saveState.data);

  return children({
    unsavedData,
    saveState,
    dataState,
    onSave,
    onChange
  });
};

const SaveWrapper = ({
  getData,
  setData,
  children,
}) => {
  return <SaveWrapperController getData={getData} setData={setData}>
    {controllerChildrenProps => {
      return (
        <SaveWrapperBody {...controllerChildrenProps}>
          {(saveWrapperBodyProps) => {
            return children(saveWrapperBodyProps)
          }}
        </SaveWrapperBody>
      );
    }}
  </SaveWrapperController>;
};

export default SaveWrapper;

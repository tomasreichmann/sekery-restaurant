/** @jsx jsx */
import { useState, useEffect, useCallback } from "react";
import { BarLoader } from "react-spinners";
import noop from "lodash/noop";
import { jsx } from "@emotion/core";
import theme from "../config/theme";
import Button from "./controls/Button";

const defaultRenderError = (error, retry) => {
  <div key="error" >
    <p>Došlo k chybě:</p>
    <pre>{JSON.stringify(error, null, 2)}</pre>
    <Button onClick={() => retry()} >Zkusit znovu?</Button>
  </div>;
};

export const DefaultLoader = ({ ...restProps }) => (
  <div
    css={{
      minHeight: 100,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
    {...restProps}
  >
    <BarLoader color={theme.color.primary} />
  </div>
);

export const InlineLoader = ({ ...restProps }) => (
  <DefaultLoader
    css={{
      minHeight: 0,
      height: "1em",
      display: "inline-block",
      verticalAlign: "middle"
    }}
    {...restProps}
  />
);

export const LoaderBody = ({
  state,
  retry = noop,
  children,
  LoadingComponent = DefaultLoader,
  renderError = defaultRenderError,
  loadingProps = {}
}) => {
  return <>
      {state.isLoading && <LoadingComponent key="loading" {...loadingProps} />}
      {state.error && renderError(state.error, retry)}
      {state.data &&
        children({
          data: state.data,
          retry
        })}
    </>
}

const Loader = ({
  children,
  task,
  initialIsLoading = true,
  LoadingComponent = DefaultLoader,
  renderError = defaultRenderError,
  loadingProps = {}
}) => {
  const [state, setState] = useState({
    isLoading: initialIsLoading,
    error: null,
    data: null
  });

  const makeRequest = useCallback(() => {
    setState({ isLoading: true, data: null, error: null });
    task()
      .then(data => {
        setState({ isLoading: false, data, error: null });
      })
      .catch(error => {
        setState({ isLoading: false, data: null, error });
      });
  }, [task, state]);

  useEffect(() => {
    makeRequest();
  }, [task]);

  return (
    <LoaderBody
      LoadingComponent={LoadingComponent}
      renderError={renderError}
      loadingProps={loadingProps}
      state={state}
      retry={makeRequest}
    >
      {children}
    </LoaderBody>
  );
};

export default Loader;

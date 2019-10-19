/** @jsx jsx */
import { jsx } from "@emotion/core";
import Message from "./Message";

const ErrorMessage = ({ error, ...restProps }) => {
  return (
    <Message {...restProps}>
        Při načítání stránky došlo k chybě.
        <br />
        Prosím oznamte problém administrátorovi{" "}
        <a href="mailto:tomasreichmann@gmail.com">Tomášovi Reichmannovi</a>.
        Děkuji.
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </Message>
  );
};

export default ErrorMessage;

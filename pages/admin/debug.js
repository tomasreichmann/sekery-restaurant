/** @jsx jsx */
import { jsx } from "@emotion/core";
import firebaseConfig from "../../firebase/config";

const Debug = () => (
  <div>
    <pre>{JSON.stringify(firebaseConfig)}</pre>
  </div>
);

export default Debug;

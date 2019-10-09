/** @jsx jsx */
import { jsx } from "@emotion/core";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase/firebase";
import theme from "../../config/theme";
import Headline from "../Headline";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  credentialHelper: "none",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
};

const Login = ({
  color = theme.color.primaryLightest,
  height = 4,
  ...restProps
}) => {
  return (
    <div {...restProps}>
      <Headline
        css={{
          textAlign: "center"
        }}
      >
        Přihlášení
      </Headline>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Login;

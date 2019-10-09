/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import Head from "next/head";

import theme from "../../config/theme";
import Header from "../Header";
import { AuthProvider } from "../../firebase/auth";
import AdminNavigation from "./AdminNavigation";
import AuthRequired from "./AuthRequired";

const AdminPage = ({ title = "Administrace | Restaurant Sekery", children, ...restProps }) => {
  return (
    <AuthProvider>
      <div>
        <Global styles={css(theme.global)} />
        <Head>
          <title>{title}</title>
          <link
            href="https://fonts.googleapis.com/css?family=Magra:700|Merriweather:400,700&amp;display=swap&amp;subset=latin-ext"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <main>
          <AuthRequired>
            <AdminNavigation />
            {children}
          </AuthRequired>
        </main>
      </div>
    </AuthProvider>
  );
};

export default AdminPage;

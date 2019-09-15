/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../../components/Page";
import Link from "next/link";
import theme from "../../config/theme";
import AdminNavigation from "../../components/AdminNavigation";

const Admin = () => (
  <Page title="Administrace">
    <AdminNavigation />
    <section css={{ padding: theme.spacing }}>
      <p><Link href="/admin/vecerni-menu" >Večerní menu</Link></p>
    </section>
  </Page>
);

export default Admin;

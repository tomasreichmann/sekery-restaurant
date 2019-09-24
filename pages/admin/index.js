/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../../components/Page";
import Link from "next/link";
import theme from "../../config/theme";
import AdminNavigation from "../../components/admin/AdminNavigation";
import A from "../../components/A";

const Admin = () => (
  <Page title="Administrace">
    <AdminNavigation />
    <section css={{ padding: theme.spacing }}>
      <p><Link href="/admin/vecerni-menu" ><A>Večerní menu</A></Link></p>
      <p><Link href="/admin/denni-menu" ><A>Denní menu</A></Link></p>
    </section>
  </Page>
);

export default Admin;

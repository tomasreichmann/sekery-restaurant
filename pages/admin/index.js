/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "next/link";
import theme from "../../config/theme";
import A from "../../components/A";
import AdminPage from "../../components/admin/AdminPage";

const Admin = () => (
  <AdminPage title="Administrace">
      <section css={{ padding: theme.spacing }}>
        <p><Link href="/admin/vecerni-menu" ><A>Večerní menu</A></Link></p>
        <p><Link href="/admin/denni-menu" ><A>Denní menu</A></Link></p>
      </section>
  </AdminPage>
);

export default Admin;

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import theme from "../../config/theme";
import Link from "next/link";
import A from "../A";
import { useAuth } from "../../firebase/auth";
import Button from "../controls/Button";

const linkProps = {
  css: css({
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: theme.color.white
    },
    marginLeft: theme.spacing,
    marginRight: theme.spacing
  })
};

const AdminNavigation = ({ ...restProps }) => {
  const authState = useAuth();

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: theme.color.paperInverse,
        color: theme.color.paper,
        paddingTop: theme.spacing,
        paddingBottom: theme.spacing
      }}
      {...restProps}
    >
      <Link href="/admin">
        <A {...linkProps}>Administrace</A>
      </Link>
      <Link href="/admin/uvod">
        <A {...linkProps}>Úvod</A>
      </Link>
      <Link href="/admin/o-nas">
        <A {...linkProps}>O nás</A>
      </Link>
      <Link href="/admin/stala-denni-nabidka">
        <A {...linkProps}>Stálá denní nabídka</A>
      </Link>
      <Link href="/admin/denni-menu">
        <A {...linkProps}>Denní menu</A>
      </Link>
      <Link href="/admin/napojovy-listek">
        <A {...linkProps}>Nápojový lístek</A>
      </Link>
      <Link href="/admin/vecerni-menu">
        <A {...linkProps}>Večerní menu</A>
      </Link>
      <div
        css={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {authState.user && (
          <span>{authState.user.displayName || authState.user.email}&emsp;<Button onClick={() => authState.logout()} {...linkProps} >Odhlásit se</Button></span>
        )}
      </div>
    </div>
  );
};

export default AdminNavigation;

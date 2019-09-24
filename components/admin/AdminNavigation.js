/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import theme from '../../config/theme';
import Link from 'next/link';
import A from '../A';

const linkProps = {
  css: css({
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: theme.color.white,
    },
    marginLeft: theme.spacing,
    marginRight: theme.spacing,
  }),
};

const AdminNavigation = ({...restProps}) => {
  return (
    <div css={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.color.paperInverse,
      color: theme.color.paper,
      paddingTop: theme.spacing,
      paddingBottom: theme.spacing,
    }} {...restProps}>
      <Link href="/admin" >
        <A {...linkProps}>Administrace</A>
      </Link>
      <Link href="/admin/vecerni-menu" >
        <A {...linkProps}>Večerní menu</A>
      </Link>
      <Link href="/admin/denni-menu" >
        <A {...linkProps}>Denní menu</A>
      </Link>
    </div>
  )
}

export default AdminNavigation;
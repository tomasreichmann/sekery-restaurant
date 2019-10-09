/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import Router from "next/router";

import theme from "../../config/theme";
import Headline from "../../components/Headline";
import { getDailyMenus, setDailyMenu } from "../../firebase/firestore";
import { LoaderBody } from "../../components/Loader";
import Button from "../../components/controls/Button";
import Input from "../../components/controls/Input";
import { getStringDate } from "../../components/sections/DailyMenu";
import Link from "next/link";
import A from "../../components/A";
import AdminPage from "../../components/admin/AdminPage";

const createMenu = date => {
  setDailyMenu({ date, items: [] }).then(() =>
    Router.push(`/admin/denni-menu/${date}`)
  );
};

function LunchMenus({ initialMenus }) {
  const now = new Date();
  const [date, setDate] = useState(getStringDate(now));
  const [menusState, setMenusState] = useState({
    isLoading: true,
    error: null,
    data: null
  });

  useEffect(() => {
    if (menusState.data === null) {
      setMenusState({ isLoading: false, error: null, data: initialMenus });
    }
  }, [initialMenus, menusState]);

  return (
    <AdminPage title="Denní menu">
      <section css={{ padding: theme.spacing }}>
        <Headline level={1}>Denní menu</Headline>
        <LoaderBody state={menusState}>
          {({ data }) => {
            const menuAlreadyExists = data.some(menu => menu.date === date);
            return (
              <>
                <div>
                  <span css={{ display: "inline-block", maxWidth: 200 }}>
                    <Input
                      type="date"
                      value={date}
                      onChange={date => setDate(date)}
                    />
                  </span>
                  &emsp;
                  <Button
                    disabled={!date || menuAlreadyExists}
                    onClick={() => createMenu(date)}
                  >
                    Vytvořit menu
                  </Button>
                  &emsp;
                  {menuAlreadyExists && "Menu pro tento den již existuje."}
                </div>
                {data.length === 0 ? (
                  <p>Nebyly nalezeny žádné položky</p>
                ) : (
                  <div>
                    {data.map(menu => {
                      // TODO: počet položek, mazání.
                      return (
                        <p>
                          <Link href={`/admin/denni-menu/${menu.date}`}>
                            <A>{menu.date}</A>
                          </Link>{" "}
                          {menu.items.length} položek.
                        </p>
                      );
                    })}
                  </div>
                )}
              </>
            );
          }}
        </LoaderBody>
      </section>
    </AdminPage>
  );
}

LunchMenus.getInitialProps = async () => {
  const menus = await getDailyMenus();
  return { initialMenus: menus };
};

export default LunchMenus;

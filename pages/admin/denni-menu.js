/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import Router from "next/router";

import theme from "../../config/theme";
import Headline from "../../components/Headline";
import { getDailyMenus, setDailyMenu, getSectionContent, setSectionContent } from "../../firebase/firestore";
import { LoaderBody } from "../../components/Loader";
import Button from "../../components/controls/Button";
import Input from "../../components/controls/Input";
import DailyMenu, { getStringDate } from "../../components/sections/DailyMenu";
import Link from "next/link";
import A from "../../components/A";
import AdminPage from "../../components/admin/AdminPage";
import SaveWrapper from "../../components/admin/SaveWrapper";
import ContentEditor from "../../components/admin/ContentEditor";

// IMPORTANT TO UPDATE WHEN COPYING SECTION
const sectionKey = "dailyMenu";
const getSectionData = () => getSectionContent(sectionKey);
const setSectionData = (data) => setSectionContent(sectionKey, data);

const model = [
  {
    prop: "sectionTitle",
    label: "Nadpis sekce",
    editorName: "Input",
  },
  {
    prop: "sectionTitleEn",
    label: "Nadpis sekce EN",
    editorName: "Input",
  },
  {
    prop: "headerImageUri",
    label: "Adresa obrázku hlavičky sekce",
    editorName: "Input",
  },
  {
    prop: "headerImageHeight",
    label: "Výška obrázku hlavičky sekce",
    editorName: "Number",
  },
  {
    prop: "noDailyMenu",
    label: "Text pro případ kdy není denní nabídka",
    editorName: "Input",
  },
  {
    prop: "noDailyMenuEn",
    label: "Text pro případ kdy není denní nabídka EN",
    editorName: "Input",
  },
];

const createMenu = date => {
  setDailyMenu({ date, items: [] }).then(() =>
    Router.push(`/admin/denni-menu/${date}`)
  );
};

function AdminLunchMenus({ initialMenus }) {
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
        <SaveWrapper
          getData={getSectionData}
          setData={setSectionData}
        >
          {({ data, onChange}) => {
            return (
              <ContentEditor
                model={model}
                data={data}
                onChange={onChange}
                Preview={DailyMenu}
              />
            );
          }}
        </SaveWrapper>
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
                        <p key={menu.date}>
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

AdminLunchMenus.getInitialProps = async () => {
  const menus = await getDailyMenus();
  return { initialMenus: menus };
};

export default AdminLunchMenus;

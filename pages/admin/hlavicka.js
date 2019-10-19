/** @jsx jsx */
import { jsx } from "@emotion/core";
import AdminPage from "../../components/admin/AdminPage";
import ContentEditor from "../../components/admin/ContentEditor";
import SaveWrapper from "../../components/admin/SaveWrapper";
import theme from "../../config/theme";
import { setSectionContent, getSectionContent } from "../../firebase/firestore";
import Headline from "../../components/Headline";
import { LargeHeader } from "../../components/Header";

// IMPORTANT TO UPDATE WHEN COPYING SECTION
const sectionKey = "header";
const getSectionData = () => getSectionContent(sectionKey);
const setSectionData = (data) => setSectionContent(sectionKey, data);

const HeaderAdmin = () => {
  const model = [
    {
      prop: "pageTitle",
      label: "Název stránky",
      editorName: "Input",
    },
    {
      prop: "navigation",
      label: "Navigace",
      editorName: "Array",
      editorProps: {
        model: {
          editorName: "Object",
          editorProps: {
            model: [
              {
                prop: "text",
                editorName: "Input",
                label: "Text",
              },
              {
                prop: "href",
                editorName: "Input",
                label: "Adresa odkazu",
                editorProps: {
                  placeholder: "/#denni-menu",
                }
              }
            ]
          }
        }
      }
    },
    {
      prop: "navigationEn",
      label: "Navigace EN",
      editorName: "Array",
      editorProps: {
        maxItems: null,
        model: {
          editorName: "Object",
          editorProps: {
            model: [
              {
                prop: "text",
                editorName: "Input",
                label: "Text",
              },
              {
                prop: "href",
                editorName: "Input",
                label: "Adresa odkazu",
                editorProps: {
                  placeholder: "/#denni-menu",
                }
              }
            ]
          }
        }
      }
    },
    {
      prop: "languages",
      label: "Jazyky",
      editorName: "Array",
      editorProps: {
        maxItems: null,
        model: {
          editorName: "Object",
          editorProps: {
            model: [
              {
                prop: "icon",
                editorName: "Input",
                label: "Adresa ikony",
                editorProps: {
                  placeholder: "/static/cz.svg",
                }
              },
              {
                prop: "code",
                editorName: "Input",
                label: "Zkratka",
                editorProps: {
                  placeholder: "",
                }
              }
            ]
          }
        }
      }
    },
    {
      prop: "social",
      label: "Sociální odkazy",
      editorName: "Object",
      editorProps: {
        model: [
          {
            editorName: "Input",
            prop: "facebook",
            label: "Facebook",
            editorProps: {
              placeholder: "https://www.facebook.com/Sekery-Restaurant-103322994343167",
            }
          },
          {
            editorName: "Input",
            prop: "instagram",
            label: "Instagram",
            editorProps: {
              placeholder: "https://www.instagram.com/sekery_restaurant/",
            }
          },
          {
            editorName: "Input",
            prop: "tripadvisor",
            label: "TripAdvisor",
            editorProps: {
              placeholder: "https://www.tripadvisor.cz/",
            }
          },
        ]
      }
    },
  ];

  return (
    <AdminPage title="Hlavička">
      <div css={{ padding: theme.spacing }}>
        <Headline level={1} >Hlavička</Headline>
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
                Preview={({...props}) => <LargeHeader headerContent={props} />}
              />
            );
          }}
        </SaveWrapper>
      </div>
    </AdminPage>
  );
};

export default HeaderAdmin;

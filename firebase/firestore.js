import firebase from "./firebase";
// Required for side-effects
require("firebase/firestore");

export const db = firebase.firestore();

export const getMealMenu = () => {
  return db
    .collection("staticMenus")
    .doc("mealMenu")
    .get()
    .then(docSnapshot => {
      return docSnapshot.data();
    });
};

export const getEveningMenu = () => {
  return db
    .collection("staticMenus")
    .doc("eveningMenu")
    .get()
    .then(docSnapshot => {
      return docSnapshot.data();
    });
};

export const getDrinkMenu = () => {
  return db
    .collection("staticMenus")
    .doc("drinkMenu")
    .get()
    .then(docSnapshot => {
      return docSnapshot.data();
    });
};

export const setMealMenu = menu => {
  return db
    .collection("staticMenus")
    .doc("mealMenu")
    .set(menu);
};

export const setEveningMenu = menu => {
  return db
    .collection("staticMenus")
    .doc("eveningMenu")
    .set(menu);
};

export const setDrinkMenu = menu => {
  return db
    .collection("staticMenus")
    .doc("drinkMenu")
    .set(menu);
};

export const getDailyMenus = () => {
  return db
    .collection("dailyMenus")
    .orderBy("date", "desc")
    .get()
    .then(querySnapshot => {
      return querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });
    });
};

export const getDailyMenu = date => {
  return db
    .collection("dailyMenus")
    .doc(date)
    .get()
    .then(docSnapshot => {
      if (docSnapshot) {
        return {
          id: docSnapshot.id,
          ...docSnapshot.data()
        };
      }
      return null;
    });
};

export const setDailyMenu = ({ ...menu }) => {
  return db
    .collection("dailyMenus")
    .doc(menu.date)
    .set(menu);
};

export const getSectionContent = section => {
  return db
    .collection("section")
    .doc(section)
    .get()
    .then(docSnapshot => {
      const data = docSnapshot.data();
      return data || {};
    });
};

export const setSectionContent = (section, data) => {
  return db
    .collection("section")
    .doc(section)
    .set(data);
};

const getSectionError = (section, error = "") =>
  Error(
    `Sekci "${section}" se nepodařilo načíst. Zobrazí se záložní data.\n${JSON.stringify(
      error,
      null,
      2
    )}`
  );

export const loadSection = async section => {
  const content = await getSectionContent(section).catch(error => {
    throw getSectionError(section, error);
  });
  if (!content) {
    throw getSectionError(section);
  }
  return { [`${section}Content`]: content };
};

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
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
  });
};

export const getDailyMenu = (date) => {
  return db
    .collection("dailyMenus")
    .doc(date)
    .get()
    .then((docSnapshot) => {
      if (docSnapshot) {
        return {
          id: docSnapshot.id,
          ...docSnapshot.data()
        }
      }
      return null;
  });
};

export const setDailyMenu = ({...menu}) => {
  return db
    .collection("dailyMenus")
    .doc(menu.date)
    .set(menu);
};

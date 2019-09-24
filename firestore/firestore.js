import firebaseConfig from "./config";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export const getMealMenu = () => {
  return db
    .collection("eveningMenus")
    .doc("eveningMenu")
    .get()
    .then(docSnapshot => {
      return docSnapshot.data();
    });
};

export const setMealMenu = menu => {
  return db
    .collection("eveningMenus")
    .doc("eveningMenu")
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

const apiKey = FIREBASE_API_KEY;

if (!apiKey) {
  console.log('FIREBASE_API_KEY', apiKey);
  throw new Error("missing firebase api key");
}

const firebaseConfig = {
  apiKey,
  authDomain: "sekery-restaurant.firebaseapp.com",
  databaseURL: "https://sekery-restaurant.firebaseio.com",
  projectId: "sekery-restaurant",
  storageBucket: "sekery-restaurant.appspot.com",
  messagingSenderId: "628449262865",
  appId: "1:628449262865:web:47556e6bbdb5a1e77360b0"
};

export default firebaseConfig;

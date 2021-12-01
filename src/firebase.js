import firebase from "firebase";
//Config from firebase
const firebaseConfig = {
  //WebApp Firebase
  apiKey: "AIzaSyCvJ5VgdemQsFcwktzQ7x5AZevZRhU2vLY",
  authDomain: "facebook-clonecse45.firebaseapp.com",
  projectId: "facebook-clonecse45",
  storageBucket: "facebook-clonecse45.appspot.com",
  messagingSenderId: "194205969224",
  //appId: "1:194205969224:web:c0bf4950a13c728019217d",
  //measurementId: "G-G7D711QQX3",

  //ChatApp Firebase and social
  databaseURL: "https://facebook-clonecse45-default-rtdb.firebaseio.com",

  appId: "1:194205969224:web:12698792d0dfa96519217d",

  measurementId: "G-6XL503WZPW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
//Likes comments and shares update (storage) 10/26/2021 9:52pm

//ChatApp
//const analytics = getAnalytics(firebaseApp);

//Likes comments and shares update 10/26/2021 9:52pm
export { auth, provider };
export default db;
//2;59

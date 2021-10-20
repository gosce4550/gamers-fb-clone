import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvJ5VgdemQsFcwktzQ7x5AZevZRhU2vLY",
  authDomain: "facebook-clonecse45.firebaseapp.com",
  projectId: "facebook-clonecse45",
  storageBucket: "facebook-clonecse45.appspot.com",
  messagingSenderId: "194205969224",
  appId: "1:194205969224:web:c0bf4950a13c728019217d",
  measurementId: "G-G7D711QQX3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
//2;59

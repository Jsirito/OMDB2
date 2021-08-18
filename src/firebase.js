import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCta9T7iuAwkqQrRcolR59LX5E2I4Yr9QQ",
  authDomain: "omdb-dev-d77bc.firebaseapp.com",
  projectId: "omdb-dev-d77bc",
  storageBucket: "omdb-dev-d77bc.appspot.com",
  messagingSenderId: "205765344808",
  appId: "1:205765344808:web:db4fce260ddc911bb53f1d"
});

export const auth = app.auth();
export const db = firebase.firestore();
export default app;

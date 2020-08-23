import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpB8MLxuKCkAZNdM-2FuRzZzgs0QvXBRQ",
  authDomain: "clone-793c4.firebaseapp.com",
  databaseURL: "https://clone-793c4.firebaseio.com",
  projectId: "clone-793c4",
  storageBucket: "clone-793c4.appspot.com",
  messagingSenderId: "129528889255",
  appId: "1:129528889255:web:1d6a74fa055b7a020f4082",
  measurementId: "G-NC0966DX8Q",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

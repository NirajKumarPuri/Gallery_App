import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBaP7_U5vI8dRP-mrXbW-lI8un5iSz8j30",
    authDomain: "projectc-c6557.firebaseapp.com",
    databaseURL: "https://projectc-c6557-default-rtdb.firebaseio.com",
    projectId: "projectc-c6557",
    storageBucket: "projectc-c6557.appspot.com",
    messagingSenderId: "883894007739",
    appId: "1:883894007739:web:22692fbe2f00969348369e"
  };
  // Initialize Firebase
  const firebaseapp=firebase.initializeApp(firebaseConfig)
  export default firebaseapp;
import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAY2ekgu-Pz2IgJLq76cLv7NTzs3k0zFa8",
    authDomain: "todo-8888.firebaseapp.com",
    databaseURL: "https://todo-8888.firebaseio.com",
    projectId: "todo-8888",
    storageBucket: "",
    messagingSenderId: "676071351082",
    appId: "1:676071351082:web:89f33034dce9047e"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
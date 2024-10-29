import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDo0a9LO41nySbJDg3GWlq0hYSbM9VOQ34",
    authDomain: "intergration-6dec8.firebaseapp.com",
    projectId: "intergration-6dec8",
    storageBucket: "intergration-6dec8.appspot.com",
    messagingSenderId: "250445643248",
    appId: "1:250445643248:web:9caac11de29855bc547135",
    measurementId: "G-T46MZ8QW9Y"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const auth = getAuth(firebaseApp);
  export const db = getFirestore(firebaseApp);
  export const storage = getStorage(firebaseApp);
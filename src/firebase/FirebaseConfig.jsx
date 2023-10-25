// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEYzdH0gIY1FgTMwcWtFU62reX4jOtfPo",
  authDomain: "my-e-commerce-93528.firebaseapp.com",
  projectId: "my-e-commerce-93528",
  storageBucket: "my-e-commerce-93528.appspot.com",
  messagingSenderId: "96680965997",
  appId: "1:96680965997:web:b163b7744dda31445a0c64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };

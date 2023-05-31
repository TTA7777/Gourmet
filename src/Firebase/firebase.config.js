// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrHgy0A5VLp6qyFmg1GS9Nmcu2ePcDhEY",
  authDomain: "resturant-b9584.firebaseapp.com",
  projectId: "resturant-b9584",
  storageBucket: "resturant-b9584.appspot.com",
  messagingSenderId: "446524609907",
  appId: "1:446524609907:web:eeede33e2b1123841be106",
  measurementId: "G-H1FS198LVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
const analytics = getAnalytics(app);

export default app
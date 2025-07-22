// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "blog-app-ffb2a.firebaseapp.com",
//   projectId: "blog-app-ffb2a",
//   storageBucket: "blog-app-ffb2a.appspot.com",
//   messagingSenderId: "162774535945",
//   appId: "1:162774535945:web:bef4d35b98cad060a08dd8"
// };


const firebaseConfig = {
  apiKey: import.meta.env.VITE_BASE_API_KEYS,
  authDomain: import.meta.env.VITE_BASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_BASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_BASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_BASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_BASE_APP_ID
};
// console.log(import.meta.env.FIREBASE_APIKEY);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
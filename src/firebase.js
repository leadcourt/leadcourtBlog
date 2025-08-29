import { initializeApp } from "firebase/app"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_BASE_API_KEYS,
  authDomain: import.meta.env.VITE_BASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_BASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_BASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_BASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_BASE_APP_ID
}; 

export const app = initializeApp(firebaseConfig);
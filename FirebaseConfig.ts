import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCloH1WdmeINSIEM23fvLh_Iv2grP-Uoj4",
  authDomain: "rn-firebase-test-app.firebaseapp.com",
  projectId: "rn-firebase-test-app",
  storageBucket: "rn-firebase-test-app.appspot.com",
  messagingSenderId: "349833716361",
  appId: "1:349833716361:web:8c850a71df995ce5709c58",
  measurementId: "G-W9X3PQTY5H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

export { db };


// IOS: 522292206159-3vm2nulnq3iuhi49e6jall2u7g8jdgkf.apps.googleusercontent.com

// android: 522292206159-fg8acdulakkpdvgnkihkedm8h719023t.apps.googleusercontent.com
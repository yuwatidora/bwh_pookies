// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABLm4kaL4JQv6t9LtrG-_fJXCSRBvs0OE",
  authDomain: "react-native-login-9d0ce.firebaseapp.com",
  projectId: "react-native-login-9d0ce",
  storageBucket: "react-native-login-9d0ce.appspot.com",
  messagingSenderId: "310634754543",
  appId: "1:310634754543:web:1610b0d5ad68fea381861a"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });

export const FIRESTORE_DB = getFirestore(app)

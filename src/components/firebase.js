import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyA2CmK484272Sa5t2b0yv8jFTbboWD5UcE",
    authDomain: "chatpal-2be47.firebaseapp.com",
    projectId: "chatpal-2be47",
    storageBucket: "chatpal-2be47.appspot.com",
    messagingSenderId: "737348648195",
    appId: "1:737348648195:web:d86479cfe8321f542e7d36",
    measurementId: "G-L6ZVVCCSSW"
  }).auth();
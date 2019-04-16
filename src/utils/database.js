/**
 * @name database.js
 * @author Nico Finkernagel
 */

require('dotenv').config();

const firebase = require("firebase");
const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "verify-8a73f.firebaseapp.com",
  databaseURL: "https://verify-8a73f.firebaseio.com",
  projectId: "verify-8a73f",
  storageBucket: "verify-8a73f.appspot.com",
  messagingSenderId: "612769697074"
};
firebase.initializeApp(config);
module.exports = firebase.database();
/**
 * @name verify.js
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
const db = firebase.database();

module.exports.verifyKey = (_service, _key) => {
  return new Promise((resolve, reject) => {
    const ref = db.ref(_service + '/' + _key);
    ref.on("value", (snapshot) => {
      const resp = snapshot.val();
      if (resp) {
        if (resp.Activ === true) {
          resolve(true);
        } else {
          resolve(false);
        }
      } else {
        resolve(false);
      }
    }, (error) => {
      reject(new Error(`API Key Checking Failed! ${error}`));
    });
  });
}
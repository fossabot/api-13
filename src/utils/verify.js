/**
 * @name verify.js
 * @author Nico Finkernagel
 */

require('dotenv').config();

const firebase = require("firebase");
const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "monitoring-gruselhaus-com.firebaseapp.com",
  databaseURL: "https://monitoring-gruselhaus-com.firebaseio.com",
  projectId: "monitoring-gruselhaus-com",
  storageBucket: "monitoring-gruselhaus-com.appspot.com",
  messagingSenderId: "952728646343"
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
    }, () => {
      reject(new Error('API Key Checking Failed!'));
    });
  });
}
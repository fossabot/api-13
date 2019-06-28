/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
 */

import * as firebase from "firebase";
firebase.initializeApp({
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "verify-8a73f.firebaseapp.com",
  databaseURL: "https://verify-8a73f.firebaseio.com",
  projectId: "verify-8a73f",
  storageBucket: "verify-8a73f.appspot.com",
  messagingSenderId: "612769697074"
});
export const db = firebase.database();

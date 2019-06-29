/*
 * File: database.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 12:00:10 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
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

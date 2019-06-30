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
  authDomain: "gruselhaus-api.firebaseapp.com",
  databaseURL: "https://gruselhaus-api.firebaseio.com",
  projectId: "gruselhaus-api",
  storageBucket: "",
  messagingSenderId: "622194594278",
  appId: "1:622194594278:web:7512b7f4672fe7a7"
});

export const db = firebase.database();

/**
 * @name verify.js
 * @author Nico Finkernagel
 */

const db = require('../config/database');

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
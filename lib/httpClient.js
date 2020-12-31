'use strict';

const request = require('request');
const helper = require('../utils/helper');

function HttpClient(harperConfig) {
  this.harperConfig = harperConfig;
}

HttpClient.prototype.request = function(requestBody, cb) {
  let auth;
  if (this.harperConfig.token) {
    auth = 'Bearer ' + this.harperConfig.token;
  } else {
    auth = 'Basic ' + Buffer.from(this.harperConfig.username + ':' + this.harperConfig.password, 'utf8').toString('base64');
  }

  const requestOption = {
    'method': 'POST',
    'url': this.harperConfig.harperHost,
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': auth,
    },
    'body': JSON.stringify(requestBody),
  }

  request(requestOption, (err, result) => {
    if (err) cb(err);
    else cb(null, result);
  });
}

HttpClient.prototype.promiseOrCallback = function(reqBody, operation, callback) {
  if(callback === undefined) {
    return new Promise((resolve, reject) => {
      this.request(reqBody, (err, result) => {
        if (err) return reject(err);
        try {
          return resolve(helper.prepareResponse(result, operation));
        } catch (err) {
          return reject(err);
        }
      });
    });
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    } else {
      try {
        callback(null, helper.prepareResponse(result, operation));
      } catch (err) {
        callback(err);
      }
    }
  });
}

module.exports = HttpClient;

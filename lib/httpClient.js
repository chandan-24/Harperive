'use strict'

const request = require('request');

function HttpClient(harperConfig) {
  this.harperConfig = harperConfig;
}

HttpClient.prototype.request = function(requestBody, cb) {
  const basicAuth = 'Basic ' + Buffer.from(this.harperConfig.username + ':' + this.harperConfig.password, 'utf8').toString('base64');

  const requestOption = {
    'method': 'POST',
    'url': this.harperConfig.harperHost,
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': basicAuth,
    },
    'body': JSON.stringify(requestBody),
  }
  if (cb === undefined) {
    return new Promise((resolve, reject) => {
      request(requestOption, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    })
  }

  request(requestOption, (err, result) => {
    if (err) {
      cb(err);
    }
    cb(null, result);
  });
}

module.exports = HttpClient;

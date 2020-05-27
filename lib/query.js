'use strict'

const HttpClient = require('./httpClient');
const operation = require('./operations');
const helper = require('./helper');

function Query(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Query.prototype = Object.create(HttpClient.prototype);

Query.prototype.query = function(query, callback) {
  const reqBody = {
    operation: operation.SQL,
    sql: query,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}


module.exports = Query;
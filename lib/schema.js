'use strict'

const HttpClient = require('./httpClient');
const operation = require('./operations');
const helper = require('./helper');

function Schema(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Schema.prototype = Object.create(HttpClient.prototype);

Schema.prototype.describeSchema = function({schema}, callback) {
  const reqBody = {
    operation: operation.DESCRIBE_SCHEMA,
    schema,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

Schema.prototype.createSchema = function({schema}, callback) {
  const reqBody = {
    operation: operation.CREATE_SCHEMA,
    schema,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

Schema.prototype.dropSchema = function({schema}, callback) {
  const reqBody = {
    operation: operation.DROP_SCHEMA,
    schema,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

Schema.prototype.describeAll = function(callback) {
  const reqBody = {
    operation: operation.DESCRIBE_ALL,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

module.exports = Schema;
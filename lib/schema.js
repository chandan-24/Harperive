'use strict'

const HttpClient = require('./httpClient');
const operation = require('./operations');
const helper = require('./helper');

function Schema(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Schema.prototype = Object.create(HttpClient.prototype);

Schema.prototype.describeSchema = function(options, callback) {
  const reqBody = {
    operation: operation.DESCRIBE_SCHEMA,
    schema: options.schema || this.harperConfig.schema,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, operation.DESCRIBE_SCHEMA, callback);
  });
};

Schema.prototype.createSchema = function(options, callback) {
  const reqBody = {
    operation: operation.CREATE_SCHEMA,
    schema: options.schema,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, operation.CREATE_SCHEMA, callback);
  });
}

Schema.prototype.dropSchema = function(options, callback) {
  const reqBody = {
    operation: operation.DROP_SCHEMA,
    schema: options.schema,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, operation.DROP_SCHEMA, callback);
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
    helper.sendResponse(result, operation.DESCRIBE_ALL, callback);
  });
}

module.exports = Schema;
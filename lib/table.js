'use strict'

const HttpClient = require('./httpClient');
const operation = require('./operations');
const helper = require('./helper');

function Table(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Table.prototype = Object.create(HttpClient.prototype);

Table.prototype.createTable = function(options, callback) {
  const reqBody = {
    operation: operation.CREATE_TABLE,
    schema: options.schema || this.harperConfig.schema,
    table: options.table,
    hash_attribute: options.hashAttribute,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, operation.CREATE_TABLE, callback);
  });
}

Table.prototype.describeTable = function(options,callback) {
  const reqBody = {
    operation: operation.DESCRIBE_TABLE,
    schema: options.schema || this.harperConfig.schema,
    table: options.table,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, operation.DESCRIBE_TABLE, callback);
  });
}

Table.prototype.dropTable = function(options, callback) {
  const reqBody = {
    operation: operation.DROP_TABLE,
    schema: options.schema || this.harperConfig.schema,
    table: options.table,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, operation.DROP_TABLE, callback);
  });
}

Table.prototype.dropAttribute = function(options, callback) {
  const reqBody = {
    operation: operation.DROP_ATTRIBUTE,
    schema: options.schema || this.harperConfig.schema,
    table: options.table,
    attribute: options.attribute,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, operation.DROP_ATTRIBUTE, callback);
  });
}
module.exports = Table;

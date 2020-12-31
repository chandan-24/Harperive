'use strict';

const HttpClient = require('./httpClient');
const constants = require('../constants');
const operation = constants.OPERATIONS;

function Schema(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Schema.prototype = Object.create(HttpClient.prototype);

Schema.prototype.describeSchema = async function(options, callback) {
  const reqBody = {
    operation: operation.DESCRIBE_SCHEMA,
    schema: options.schema || this.harperConfig.schema,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DESCRIBE_SCHEMA, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Schema.prototype.createSchema = async function(options, callback) {
  const reqBody = {
    operation: operation.CREATE_SCHEMA,
    schema: options.schema,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.CREATE_SCHEMA, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Schema.prototype.dropSchema = async function(options, callback) {
  const reqBody = {
    operation: operation.DROP_SCHEMA,
    schema: options.schema,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DROP_SCHEMA, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Schema.prototype.describeAll = async function(callback) {
  const reqBody = {
    operation: operation.DESCRIBE_ALL,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DESCRIBE_ALL, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

module.exports = Schema;

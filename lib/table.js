'use strict';

const HttpClient = require('./httpClient');
const constants = require('../constants');
const operation = constants.OPERATIONS;

function Table(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Table.prototype = Object.create(HttpClient.prototype);

Table.prototype.createTable = async function(options, callback) {
  const reqBody = {
    operation: operation.CREATE_TABLE,
    schema: options.schema || this.harperConfig.schema,
    table: options.table,
    hash_attribute: options.hashAttribute,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.CREATE_TABLE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Table.prototype.describeTable = async function(options,callback) {
  const reqBody = {
    operation: operation.DESCRIBE_TABLE,
    schema: options.schema || this.harperConfig.schema,
    table: options.table,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DESCRIBE_TABLE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Table.prototype.dropTable = async function(options, callback) {
  const reqBody = {
    operation: operation.DROP_TABLE,
    schema: options.schema || this.harperConfig.schema,
    table: options.table,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DROP_TABLE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Table.prototype.createAttribute = async function(options, callback) {
  const reqBody = {
    operation: operation.CREATE_ATTRIBUTE,
    schema: options.schema || this.harperConfig.schema,
    table: options.table,
    attribute: options.attribute,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.CREATE_ATTRIBUTE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Table.prototype.dropAttribute = async function(options, callback) {
  const reqBody = {
    operation: operation.DROP_ATTRIBUTE,
    schema: options.schema || this.harperConfig.schema,
    table: options.table,
    attribute: options.attribute,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DROP_ATTRIBUTE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

module.exports = Table;

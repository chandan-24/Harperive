'use strict';

const HttpClient = require('./httpClient');
const constants = require('../constants');
const operation = constants.OPERATIONS;

function Logs(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Logs.prototype = Object.create(HttpClient.prototype);

Logs.prototype.readLog = async function(options, callback) {
  const reqBody = {
    operation: operation.READ_LOG,
    limit: options.limit,
    start: options.start,
    from: options.from,
    until: options.until,
    order: options.order || constants.SORTING_ORDER.DESC,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.READ_LOG, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Logs.prototype.readTransactionLog = async function(options, callback) {
  const reqBody = {
    operation: operation.READ_TRANSACTION_LOG,
    schema: options.schema,
    table: options.table,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.READ_TRANSACTION_LOG, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Logs.prototype.readTransactionLogByTimestamp = async function(options, callback) {
  const reqBody = {
    operation: operation.READ_TRANSACTION_LOG,
    schema: options.schema,
    table: options.table,
    search_type: constants.TRANSACTION_LOGS_SEARCH_TYPE.TIMESTAMP,
    search_values: options.searchValues,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.READ_TRANSACTION_LOG, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Logs.prototype.readTransactionLogByUsername = async function(options, callback) {
  const reqBody = {
    operation: operation.READ_TRANSACTION_LOG,
    schema: options.schema,
    table: options.table,
    search_type: constants.TRANSACTION_LOGS_SEARCH_TYPE.USERNAME,
    search_values: options.searchValues,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.READ_TRANSACTION_LOG, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Logs.prototype.readTransactionLogByHashValue = async function(options, callback) {
  const reqBody = {
    operation: operation.READ_TRANSACTION_LOG,
    schema: options.schema,
    table: options.table,
    search_type: constants.TRANSACTION_LOGS_SEARCH_TYPE.HASH_VALUE,
    search_values: options.searchValues,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.READ_TRANSACTION_LOG, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Logs.prototype.deleteTransactionLogsBefore = async function(options, callback) {
  const reqBody = {
    operation: operation.DELETE_TRANSACTION_LOGS_BEFORE,
    schema: options.schema,
    table: options.table,
    timestamp: options.timestamp,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DELETE_TRANSACTION_LOGS_BEFORE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

module.exports = Logs;

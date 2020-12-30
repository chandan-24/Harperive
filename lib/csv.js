'use strict';

const HttpClient = require('./httpClient');
const constants = require('../constants');
const operation = constants.OPERATIONS;

function Csv(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Csv.prototype = Object.create(HttpClient.prototype);

Csv.prototype.csvDataLoad = async function({schema, table, action, data}, callback) {
  const reqBody = {
    operation: operation.CSV_DATA_LOAD,
    action: action || constants.DB_OPS.INSERT,
    schema: schema || this.harperConfig.schema,
    table,
    data,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.CSV_DATA_LOAD, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Csv.prototype.csvUrlLoad = async function({schema, table, action, url}, callback) {
  const reqBody = {
    operation: operation.CSV_URL_LOAD,
    action: action || constants.DB_OPS.INSERT,
    schema: schema || this.harperConfig.schema,
    table,
    csv_url: url,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.CSV_URL_LOAD, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

module.exports = Csv;

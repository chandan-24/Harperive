'use strict'

const HttpClient = require('./httpClient');
const operation = require('../constants/operations');

function Query(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Query.prototype = Object.create(HttpClient.prototype);

Query.prototype.query = async function(query, callback) {
  const reqBody = {
    operation: operation.SQL,
    sql: query,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.SQL, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Query.prototype.insert = async function({schema, table, records}, callback) {
  const reqBody = {
    operation: operation.INSERT,
    schema: schema || this.harperConfig.schema,
    table,
    records,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.INSERT, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Query.prototype.delete = async function({schema, table, hashValues}, callback) {
  const reqBody = {
    operation: operation.DELETE,
    schema: schema || this.harperConfig.schema,
    table,
    hash_values: hashValues,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DELETE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Query.prototype.update = async function({schema, table, records}, callback) {
  const reqBody = {
    operation: operation.UPDATE,
    schema: schema || this.harperConfig.schema,
    table,
    records,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.UPDATE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Query.prototype.searchByHash = async function({schema, table, hashValues, attributes}, callback) {
  const reqBody = {
    operation: operation.SEARCH_BY_HASH,
    schema: schema || this.harperConfig.schema,
    table,
    hash_values: hashValues,
    get_attributes: attributes,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.SEARCH_BY_HASH, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Query.prototype.searchByValue = async function({schema, table, searchAttribute, searchValue, attributes}, callback) {
  const reqBody = {
    operation: operation.SEARCH_BY_VALUE,
    schema: schema || this.harperConfig.schema,
    table,
    search_attribute: searchAttribute,
    search_value: searchValue,
    get_attributes: attributes,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.SEARCH_BY_VALUE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
}

Query.prototype.csvDataLoad = async function({schema, table, data}, callback) {
  const reqBody = {
    operation: operation.CSV_DATA_LOAD,
    action: 'insert',
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

Query.prototype.csvUrlLoad = async function({schema, table, url}, callback) {
  const reqBody = {
    operation: operation.CSV_URL_LOAD,
    action: 'insert',
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

module.exports = Query;

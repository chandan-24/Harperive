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

Query.prototype.insert = function({schema, table, records}, callback) {
  const reqBody = {
    operation: operation.INSERT,
    schema: schema || this.harperConfig.schema,
    table,
    records,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

Query.prototype.delete = function({schema, table, hashValues}, callback) {
  const reqBody = {
    operation: operation.DELETE,
    schema: schema || this.harperConfig.schema,
    table,
    hash_values: hashValues,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

Query.prototype.update = function({schema, table, records}, callback) {
  const reqBody = {
    operation: operation.UPDATE,
    schema: schema || this.harperConfig.schema,
    table,
    records,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

Query.prototype.searchByHash = function({schema, table, hashValues, attributes}, callback) {
  const reqBody = {
    operation: operation.SEARCH_BY_HASH,
    schema: schema || this.harperConfig.schema,
    table,
    hash_values: hashValues,
    get_attributes: attributes,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

Query.prototype.searchByValue = function({schema, table, searchAttribute, searchValue, attributes}, callback) {
  const reqBody = {
    operation: operation.SEARCH_BY_VALUE,
    schema: schema || this.harperConfig.schema,
    table,
    search_attribute: searchAttribute,
    search_value: searchValue,
    get_attributes: attributes,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

Query.prototype.csvDataLoad = function({schema, table, data}, callback) {
  const reqBody = {
    operation: operation.CSV_DATA_LOAD,
    action: 'insert',
    schema: schema || this.harperConfig.schema,
    table,
    data,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

Query.prototype.csvUrlLoad = function({schema, table, url}, callback) {
  const reqBody = {
    operation: operation.CSV_URL_LOAD,
    action: 'insert',
    schema: schema || this.harperConfig.schema,
    table,
    csv_url: url,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
}

module.exports = Query;

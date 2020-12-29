'use strict';

const HttpClient = require('./httpClient');
const constants = require('../constants');
const operation = constants.OPERATIONS;

function Utlities(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Utlities.prototype = Object.create(HttpClient.prototype);

Utlities.prototype.deleteFilesBefore = async function(options, callback) {
  const reqBody = {
    operation: operation.DELETE_FILES_BEFORE,
    date: options.date,
    schema: options.schema,
    table: options.table,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.GET_JOB, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Utlities.prototype.systemInformation = async function(callback) {
  const reqBody = {
    operation: operation.SYSTEM_INFORMATION,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.GET_JOB, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Utlities.prototype.readLogs = async function(options, callback) {
  const reqBody = {
    operation: operation.READ_LOG,
    limit: options.limit,
    start: options.start,
    from: options.from,
    until: options.until,
    order: options.order || 'desc'
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.GET_JOB, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Utlities.prototype.getJobDetails = async function(options, callback) {
  const reqBody = {
    operation: operation.GET_JOB,
    id: options.jobId,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.GET_JOB, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Utlities.prototype.getJobsByDate = async function(options, callback) {
  const reqBody = {
    operation: operation.SEARCH_JOB_DATE,
    from_date: options.from,
    to_date: options.until,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.GET_JOB, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

module.exports = Utlities;

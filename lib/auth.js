'use strict';

const HttpClient = require('./httpClient');
const constants = require('../constants');
const operation = constants.OPERATIONS;

function Auth(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Auth.prototype = Object.create(HttpClient.prototype);

Auth.prototype.createAuthenticationTokens = async function(options, callback) {
  const reqBody = {
    operation: operation.CREATE_AUTHENTICATION_TOKEN,
    username: options.username,
    password: options.password,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.CREATE_AUTHENTICATION_TOKEN, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Auth.prototype.refreshOperationToken = async function(options, callback) {
  const reqBody = {
    operation: operation.REFRESH_OPERATION_TOKEN,
  }

  this.harperConfig.token = options.token;

  try {
    const res = await this.promiseOrCallback(reqBody, operation.REFRESH_OPERATION_TOKEN, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

module.exports = Auth;

'use strict';

const HttpClient = require('./httpClient');
const constants = require('../constants');
const operation = constants.OPERATIONS;
function User(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

User.prototype = Object.create(HttpClient.prototype);

User.prototype.listUsers = async function(callback) {
  const reqBody = {
    operation: operation.LIST_USERS,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.LIST_USERS, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

User.prototype.userInfo = async function(callback) {
  const reqBody = {
    operation: operation.USER_INFO,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.USER_INFO, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

User.prototype.addUser = async function({role, username, password, active}, callback) {
  const reqBody = {
    operation: operation.ADD_USER,
    role,
    username,
    password,
    active,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.ADD_USER, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

User.prototype.alterUser = async function({username, role, password, active}, callback) {
  const reqBody = {
    operation: operation.ALTER_USER,
    username,
    role,
    password,
    active,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.ALTER_USER, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

User.prototype.dropUser = async function({username}, callback) {
  const reqBody = {
    operation: operation.DROP_USER,
    username,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DROP_USER, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

module.exports = User;

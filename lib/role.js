'use strict';

const HttpClient = require('./httpClient');
const constants = require('../constants');
const operation = constants.OPERATIONS;

function Role(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Role.prototype = Object.create(HttpClient.prototype);

Role.prototype.listRoles = async function(callback) {
  const reqBody = {
    operation: operation.LIST_ROLES,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.LIST_ROLES, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Role.prototype.addRole = async function(options, callback) {
  const reqBody = {
    operation: operation.ADD_ROLE,
    role: options.roleName,
    permission: options.permission,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.ADD_ROLE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Role.prototype.alterRole = async function(options, callback) {
  const reqBody = {
    operation: operation.ALTER_ROLE,
    id: options.roleId,
    role: options.roleName || constants.NULL,
    permission: options.permission,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.ALTER_ROLE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Role.prototype.dropRole = async function(options, callback) {
  const reqBody = {
    operation: operation.DROP_ROLE,
    id: options.roleId,
  }

  try {
    const res = await this.promiseOrCallback(reqBody, operation.DROP_ROLE, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};
  
module.exports = Role;

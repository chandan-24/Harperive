const HttpClient = require('./httpClient');
const operation = require('../constants/operations');
const helper = require('../utils/helper');

function UserRole(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

UserRole.prototype = Object.create(HttpClient.prototype);

UserRole.prototype.listUsers = async function(callback) {
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

UserRole.prototype.userInfo = async function(callback) {
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

UserRole.prototype.addUser = async function({role, username, password, active}, callback) {
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

UserRole.prototype.alterUser = async function({username, role, password, active}, callback) {
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

UserRole.prototype.dropUser = async function({username}, callback) {
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

UserRole.prototype.listRoles = async function(callback) {
  const reqBody = {
    'operation': operation.LIST_ROLES,
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

UserRole.prototype.addRole = async function(options, callback) {
  const reqBody = {
    'operation': operation.ADD_ROLE,
    'role': options.roleName,
    'permission': options.permission,
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

UserRole.prototype.alterRole = async function(options, callback) {
  const reqBody = {
    'operation': operation.ALTER_ROLE,
    'id': options.roleId,
    'role': options.role || null,
    'permission': options.permission,
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

UserRole.prototype.dropRole = async function(options, callback) {
  const reqBody = {
    'operation': operation.DROP_ROLE,
    'id': options.roleId,
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

module.exports = UserRole;

const HttpClient = require('./httpClient');
const operation = require('./operations');
const helper = require('./helper');

function UserRole(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

UserRole.prototype = Object.create(HttpClient.prototype);

UserRole.prototype.listUsers = function(callback) {
  const reqBody = {
    operation: operation.LIST_USERS,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

UserRole.prototype.userInfo = function(callback) {
  const reqBody = {
    operation: operation.USER_INFO,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

UserRole.prototype.addUser = function({role, username, password, active}, callback) {
  const reqBody = {
    operation: operation.ADD_USER,
    role,
    username,
    password,
    active,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

UserRole.prototype.alterUser = function({username, role, password, active}, callback) {
  const reqBody = {
    operation: operation.ALTER_USER,
    username,
    role,
    password,
    active,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

UserRole.prototype.dropUser = function({username}, callback) {
  const reqBody = {
    operation: operation.DROP_USER,
    username,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

UserRole.prototype.listRoles = function(callback) {
  const reqBody = {
    'operation': operation.LIST_ROLES,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

UserRole.prototype.addRole = function(options, callback) {
  const reqBody = {
    'operation': operation.ADD_ROLE,
    'role': options.roleName,
    'permission': options.permission,
    'permission.super_admin': options.super_admin,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

UserRole.prototype.alterRole = function(options, callback) {
  const reqBody = {
    'operation': operation.ALTER_ROLE,
    'id': options.roleId,
    'permission': options.permission,
    'permission.super_admin': options.super_admin,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

UserRole.prototype.dropRole = function(options, callback) {
  const reqBody = {
    'operation': operation.DROP_ROLE,
    'id': options.roleId,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

module.exports = UserRole;

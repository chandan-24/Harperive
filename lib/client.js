'use strict';

const Schema = require('./schema');
const Table = require('./table');
const Query = require('./query');
const Csv = require('./csv');
const User = require('./user');
const Role = require('./role');
const Cloud = require('./cloud');
const Logs = require('./logs');
const Auth = require('./auth');
const HttpClient = require('./httpClient');
const Utilities = require('./utilities');
const constants = require('../constants');
const operation = constants.OPERATIONS;

function Client(harperConfig) {
  Schema.call(this, harperConfig);
  Table.call(this, harperConfig);
  Query.call(this, harperConfig);
  Csv.call(this, harperConfig);
  Role.call(this, harperConfig);
  User.call(this, harperConfig);
  Cloud.call(this, harperConfig);
  Logs.call(this, harperConfig);
  Auth.call(this, harperConfig);
  Utilities.call(this, harperConfig);
  HttpClient.call(this, harperConfig);
}

Client.prototype = Object.create(HttpClient.prototype);

Client.prototype.authorize = async function(callback) {
  const reqBody = {
    operation: operation.USER_INFO,
  };

  try {
    const res = await this.promiseOrCallback(reqBody, operation.USER_INFO, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Client.prototype.executeOperation = async function(reqBody, callback) {
  try {
    const res = await this.promiseOrCallback(reqBody, reqBody.operation, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Client.prototype.createSchema = Schema.prototype.createSchema; 
Client.prototype.dropSchema = Schema.prototype.dropSchema;
Client.prototype.describeSchema = Schema.prototype.describeSchema;
Client.prototype.describeAll = Schema.prototype.describeAll;

Client.prototype.createTable = Table.prototype.createTable;
Client.prototype.describeTable = Table.prototype.describeTable;
Client.prototype.dropTable = Table.prototype.dropTable;
Client.prototype.dropAttribute = Table.prototype.dropAttribute;

Client.prototype.query = Query.prototype.query;
Client.prototype.insert = Query.prototype.insert;
Client.prototype.update = Query.prototype.update;
Client.prototype.delete = Query.prototype.delete;
Client.prototype.upsert = Query.prototype.upsert;
Client.prototype.searchByHash = Query.prototype.searchByHash;
Client.prototype.searchByValue = Query.prototype.searchByValue;

Client.prototype.csvDataLoad = Csv.prototype.csvDataLoad;
Client.prototype.csvUrlLoad = Csv.prototype.csvUrlLoad;

Client.prototype.listRoles = Role.prototype.listRoles;
Client.prototype.addRole = Role.prototype.addRole;
Client.prototype.alterRole = Role.prototype.alterRole;
Client.prototype.dropRole = Role.prototype.dropRole;

Client.prototype.listUsers = User.prototype.listUsers;
Client.prototype.userInfo = User.prototype.userInfo;
Client.prototype.addUser = User.prototype.addUser;
Client.prototype.alterUser = User.prototype.alterUser;
Client.prototype.dropUser = User.prototype.dropUser;

Client.prototype.exportToS3 = Cloud.prototype.exportToS3;
Client.prototype.importFromS3 = Cloud.prototype.importFromS3;

Client.prototype.readLog = Logs.prototype.readLog;
Client.prototype.readTransactionLog = Logs.prototype.readTransactionLog;
Client.prototype.readTransactionLogByTimestamp = Logs.prototype.readTransactionLogByTimestamp;
Client.prototype.readTransactionLogByUsername = Logs.prototype.readTransactionLogByUsername;
Client.prototype.readTransactionLogByHashValue = Logs.prototype.readTransactionLogByHashValue;
Client.prototype.deleteTransactionLogsBefore = Logs.prototype.deleteTransactionLogsBefore;

Client.prototype.createAuthenticationTokens = Auth.prototype.createAuthenticationTokens;
Client.prototype.refreshOperationToken = Auth.prototype.refreshOperationToken;

Client.prototype.systemInformation = Utilities.prototype.systemInformation;
Client.prototype.deleteFilesBefore = Utilities.prototype.deleteFilesBefore;
Client.prototype.getJobDetails = Utilities.prototype.getJobDetails;
Client.prototype.getJobsByDate = Utilities.prototype.getJobsByDate;

module.exports = Client;

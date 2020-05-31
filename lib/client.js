'use strict'

const Schema = require('./schema');
const Table = require('./table');
const Query = require('./query');
const UserRole = require('./userRole');
const HttpClient = require('./httpClient');
const Utilities = require('./utilities');
const helper = require('./helper');
const operation = require('./operations');

function Client(harperConfig) {
  Schema.call(this, harperConfig);
  Query.call(this, harperConfig);
  Table.call(this, harperConfig);
  UserRole.call(this, harperConfig);
  Utilities.call(this, harperConfig);
  HttpClient.call(this, harperConfig);
}

Client.prototype = Object.create(HttpClient.prototype);

Client.prototype.authorize = function(callback) {
  const reqBody = {
    operation: operation.USER_INFO,
  };

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
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
Client.prototype.searchByHash = Query.prototype.searchByHash;
Client.prototype.searchByValue = Query.prototype.searchByValue;
Client.prototype.csvDataLoad = Query.prototype.csvDataLoad;
Client.prototype.csvUrlLoad = Query.prototype.csvUrlLoad;

Client.prototype.listUsers = UserRole.prototype.listUsers;
Client.prototype.userInfo = UserRole.prototype.userInfo;
Client.prototype.addUser = UserRole.prototype.addUser;
Client.prototype.alterUser = UserRole.prototype.alterUser;
Client.prototype.dropUser = UserRole.prototype.dropUser;

Client.prototype.listRoles = UserRole.prototype.listRoles;
Client.prototype.addRole = UserRole.prototype.addRole;
Client.prototype.alterRole = UserRole.prototype.alterRole;
Client.prototype.dropRole = UserRole.prototype.dropRole;

Client.prototype.systemInformation = Utilities.prototype.systemInformation;
Client.prototype.deleteFilesBefore = Utilities.prototype.deleteFilesBefore;
Client.prototype.exportToS3 = Utilities.prototype.exportToS3;
Client.prototype.readLogs = Utilities.prototype.readLogs;
Client.prototype.getJobDetails = Utilities.prototype.getJobDetails;
Client.prototype.getJobsByDate = Utilities.prototype.getJobsByDate;

module.exports = Client;

'use strict'

// const Query = require('./query');
// const Table = require('./table');
const Schema = require('./schema');
const Table = require('./table');
const Query = require('./query');
const HttpClient = require('./httpClient');
const helper = require('./helper');
const operation = require('./operations');

function Client(harperConfig) {
  Schema.call(this, harperConfig);
  Query.call(this, harperConfig);
  Table.call(this,harperConfig);
  HttpClient.call(this, harperConfig);
}

Client.prototype = Object.create(HttpClient.prototype);
Client.prototype = Object.create(Schema.prototype);
Client.prototype = Object.create(Table.prototype);
Client.prototype = Object.create(Query.prototype);

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


  // if(callback === undefined) {
  //   return new Promise((resolve, reject) => {
  //     this.request(reqBody)
  //       .then((result) => {
  //         if (result.statusCode === 200) {
  //           const response =  helper.setResponse('SUCCESS', result.statusCode, result.body);
  //           return resolve(response);
  //         }
  //         if (result.statusCode === 401) {
  //           const err = helper.setError('FAILED', result.statusCode, result.body);
  //           return reject(err);
  //         }        
  //       })
  //       .catch((err) => reject(err));
  //   })
  // }

module.exports = Client;

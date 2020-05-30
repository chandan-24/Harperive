const HttpClient = require('./httpClient');
const operation = require('./operations');
const helper = require('./helper');

function Utlities(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Utlities.prototype = Object.create(HttpClient.prototype);


Utlities.prototype.deleteFilesBefore = function(options, callback) {
  const reqBody = {
    operation: operation.DELETE_FILES_BEFORE,
    date: options.date,
    schema: options.schema,
    table: options.table,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

Utlities.prototype.exportToS3 = function(s3Detials, query, callback) {
  const reqBody = {
    operation: operation.EXPORT_TO_S3,
    format: 'json',
    s3: s3Detials,
    search_operation: {
      operation: operation.SQL,
      sql: query,
    }
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

Utlities.prototype.systemInformation = function(callback) {
  const reqBody = {
    operation: operation.SYSTEM_INFORMATION,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

Utlities.prototype.readLogs = function(options, callback) {
  const reqBody = {
    operation: operation.READ_LOG,
    limit: options.limit,
    start: options.start,
    from: options.from,
    until: options.until,
    order: options.order || 'desc'
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

Utlities.prototype.getJobDetails = function(options, callback) {
  const reqBody = {
    operation: operation.GET_JOB,
    id: options.jobId,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};

Utlities.prototype.getJobsByDate = function(options, callback) {
  const reqBody = {
    operation: operation.SEARCH_JOB_DATE,
    from_date: options.from,
    to_date: options.until,
  }

  this.request(reqBody, (err, result) => {
    if (err) {
      callback(err);
    }
    helper.sendResponse(result, callback);
  });
};


module.exports = Utlities;

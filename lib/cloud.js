'use strict';

const HttpClient = require('./httpClient');
const constants = require('../constants');
const operation = constants.OPERATIONS;

function Cloud(harperConfig) {
  this.harperConfig = harperConfig;
  HttpClient.call(this, harperConfig);
}

Cloud.prototype = Object.create(HttpClient.prototype);

Cloud.prototype.importFromS3 = async function(options, s3Detials, callback) {
  const reqBody = {
    operation: operation.IMPORT_FROM_S3,
    action: options.action || constants.DB_OPS.INSERT,
    schema: options.schema,
    table: options.table,
    s3: {
      aws_access_key_id: s3Detials.awsAccessKeyId,
      aws_secret_access_key: s3Detials.awsSecretAccessKey,
      bucket: s3Detials.bucket,
      key: s3Detials.key,
    },
  };

  try {
    const res = await this.promiseOrCallback(reqBody, operation.IMPORT_FROM_S3, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

Cloud.prototype.exportToS3 = async function(searchOperation, s3Detials, format, callback) {
  const reqBody = {
    operation: operation.EXPORT_TO_S3,
    format: format || constants.FILE_TYPE.CSV,
    s3: {
      aws_access_key_id: s3Detials.awsAccessKeyId,
      aws_secret_access_key: s3Detials.awsSecretAccessKey,
      bucket: s3Detials.bucket,
      key: s3Detials.key,
    },
    search_operation: searchOperation,
  };

  try {
    const res = await this.promiseOrCallback(reqBody, operation.EXPORT_TO_S3, callback);
    if(res !== undefined) {
      return Promise.resolve(res);
    }
  } catch(err) {
    return Promise.reject(err);
  }
};

module.exports = Cloud;

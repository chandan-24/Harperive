'use strict'

function setResponse(status, code, operation, data) {
  if (typeof data === 'string' || data instanceof String) {
    data = JSON.parse(data);
  }
  return {
    'statusCode': code,
    status,
    operation,
    data,
  }
};

function setError(status, code, operation, err) {
  if (typeof err === 'string' || err instanceof String) {
    err = JSON.parse(err);
  }
  err.statusCode = code;
  err.status = status;
  err.operation = operation;
  return err
};

const helper = {
  sendResponse(result, operation, cb) {
    if (result.statusCode === 200) {
      const response = setResponse('SUCCESS', result.statusCode, operation, result.body);
      cb(null, response);
    } else {
      const err = setError('FAILED', result.statusCode, operation, result.body);
      cb(err);
    }
  },
};

module.exports = helper;

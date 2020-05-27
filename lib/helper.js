'use strict'

function setResponse(status, code, data) {
  if (typeof data === 'string' || data instanceof String) {
    data = JSON.parse(data);
  }
  return {
    'statusCode': code,
    status,
    data,
  }
};

function setError(status, code, err) {
  if (typeof err === 'string' || err instanceof String) {
    err = JSON.parse(err);
  }
  err.statusCode = code;
  err.status = status;
  return err
};

const helper = {
  sendResponse(result, cb) {
    if (result.statusCode === 200) {
      const response = setResponse('SUCCESS', result.statusCode, result.body);
      cb(null, response);
    } else {
      const err = setError('FAILED', result.statusCode, result.body);
      cb(err);
    }
  },
};

module.exports = helper;

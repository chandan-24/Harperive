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
  prepareResponse(result, operation) {
    if (result.statusCode === 200) {
      return setResponse('SUCCESS', result.statusCode, operation, result.body);
    } else {
      throw setError('FAILED', result.statusCode, operation, result.body);
    }
  },
};

module.exports = helper;

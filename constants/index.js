'use strict';

const operations = require('./operations');

module.exports = {
  OPERATIONS: operations,

  SORTING_ORDER: {
    DESC: 'desc',
    ASC: 'asc',
  },

  FILE_TYPE: {
    JSON: 'json',
    CSV: 'csv',
  },

  TRANSACTION_LOGS_SEARCH_TYPE: {
    TIMESTAMP: 'timestamp',
    USERNAME: 'username',
    HASH_VALUE: 'hash_value',
  },

  DB_OPS: {
    INSERT: 'insert',
    UPDATE: 'update',
    UPSERT: 'upsert',
    DELETE: 'delete',
  },

  NULL: null,
};

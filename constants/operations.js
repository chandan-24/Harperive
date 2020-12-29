'use strict'

const operationAllowed = {
  DESCRIBE_SCHEMA: 'describe_schema',
  CREATE_SCHEMA: 'create_schema',
  DROP_SCHEMA: 'drop_schema',
  DESCRIBE_ALL: 'describe_all',

  CREATE_TABLE: 'create_table',
  DESCRIBE_TABLE: 'describe_table',
  DROP_TABLE: 'drop_table',
  DROP_ATTRIBUTE: 'drop_attribute',

  SQL: 'sql',
  INSERT: 'insert',
  UPDATE: 'update',
  UPSERT: 'upsert',
  DELETE: 'delete',
  SEARCH_BY_HASH: 'search_by_hash',
  SEARCH_BY_VALUE: 'search_by_value',

  CSV_DATA_LOAD: 'csv_data_load',
  CSV_FILE_LOAD: 'csv_file_load',
  CSV_URL_LOAD: 'csv_url_load',

  ADD_USER: 'add_user',
  ALTER_USER: 'alter_user',
  DROP_USER: 'drop_user',
  LIST_USERS: 'list_users',
  USER_INFO: 'user_info',

  ADD_ROLE: 'add_role',
  ALTER_ROLE: 'alter_role',
  DROP_ROLE: 'drop_role',
  LIST_ROLES: 'list_roles',

  DELETE_FILES_BEFORE: 'delete_files_before',
  EXPORT_TO_S3: 'export_to_s3',
  READ_LOG: 'read_log',
  SYSTEM_INFORMATION: 'system_information',
  GET_JOB: 'get_job',
  SEARCH_JOB_DATE: 'search_jobs_by_start_date',
};

module.exports = operationAllowed;

export class Client {
  constructor (harperConfig: harperDbConfigOptions);

  authorize(): Promise<any>;
  authorize(cb: (error: any, response: any) => any): void;


  createSchema(options: schemaOption): Promise<any>;
  createSchema(options: schemaOption, cb: (error: any, response: responseData) => any): void;

  dropSchema(options: schemaOption): Promise<any>;
  dropSchema(options: schemaOption, cb: (error: any, response: responseData) => any): void;

  describeSchema(options: schemaOption): Promise<any>;
  describeSchema(options: schemaOption, cb: (error: any, response: responseData) => any): void;

  describeAll(): Promise<any>;
  describeAll(cb: (error: any, response: responseData) => any): void;


  createTable(options: createTableOptions): Promise<any>;
  createTable(options: createTableOptions, cb: (error: any, response: responseData) => any): void;

  describeTable(options: tableOptions): Promise<any>;
  describeTable(options: tableOptions, cb: (error: any, response: responseData) => any): void;

  dropTable(options: tableOptions): Promise<any>;
  dropTable(options: tableOptions, cb: (error: any, response: responseData) => any): void;

  createAttribute(options: attributeOptions): Promise<any>;
  createAttribute(options: attributeOptions, cb: (error: any, response: responseData) => any): void;

  dropAttribute(options: attributeOptions): Promise<any>;
  dropAttribute(options: attributeOptions, cb: (error: any, response: responseData) => any): void;


  query(sqlQuery: string): Promise<any>;
  query(sqlQuery: string, cb: (error: any, response: responseData) => any): void;

  insert(options: queryOptions): Promise<any>;
  insert(options: queryOptions, cb: (error: any, response: responseData) => any): void;

  update(options: queryOptions): Promise<any>;
  update(options: queryOptions, cb: (error: any, response: responseData) => any): void;

  upsert(options: queryOptions): Promise<any>;
  upsert(options: queryOptions, cb: (error: any, response: responseData) => any): void;

  delete(options: rowDeleteOptions): Promise<any>;
  delete(options: rowDeleteOptions, cb: (error: any, response: responseData) => any): void;

  searchByHash(options: hashSearchOptions): Promise<any>;
  searchByHash(options: hashSearchOptions, cb: (error: any, response: responseData) => any): void;

  searchByValue(options: valueSearchOptions): Promise<any>;
  searchByValue(options: valueSearchOptions, cb: (error: any, response: responseData) => any): void;


  csvDataLoad(options: dataLoadOptions): Promise<any>;
  csvDataLoad(options: dataLoadOptions, cb: (error: any, response: responseData) => any): void;

  csvUrlLoad(options: urlLoadOptions): Promise<any>;
  csvUrlLoad(options: urlLoadOptions, cb: (error: any, response: responseData) => any): void;


  listRoles(): Promise<any>;
  listRoles(cb: (error: any, response: responseData) => any): void;

  addRole(options: addRoleOptions): Promise<any>;
  addRole(options: addRoleOptions, cb: (error: any, response: responseData) => any): void;

  alterRole(options: alterRoleOptions): Promise<any>;
  alterRole(options: alterRoleOptions, cb: (error: any, response: responseData) => any): void;

  dropRole(options: dropRoleOptions): Promise<any>;
  dropRole(options: dropRoleOptions, cb: (error: any, response: responseData) => any): void;


  listUsers(): Promise<any>;
  listUsers(cb: (error: any, response: responseData) => any): void;

  userInfo(): Promise<any>;
  userInfo(cb: (error: any, response: responseData) => any): void;

  addUser(options: userAddOptions): Promise<any>;
  addUser(options: userAddOptions, cb: (error: any, response: responseData) => any): void;

  alterUser(options: userAlterOptions): Promise<any>;
  alterUser(options: userAlterOptions, cb: (error: any, response: responseData) => any): void;

  dropUser(options: userDropOptions): Promise<any>;
  dropUser(options: userDropOptions, cb: (error: any, response: responseData) => any): void;


  importFromS3(options: importFromS3Option, s3Details: s3DetailsOptions): Promise<any>;
  importFromS3(options: importFromS3Option, s3Details: s3DetailsOptions, cb: (error: any, response: responseData) => any): void;

  exportToS3(searchOperationOptions: any, s3Details: s3DetailsOptions, format: 'json' | 'csv'): Promise<any>;
  exportToS3(searchOperationOptions: any, s3Details: s3DetailsOptions, format: 'json' | 'csv', cb: (error: any, response: responseData) => any): void;


  readLogs(logsOptions: logsOptions): Promise<any>;
  readLogs(logsOptions: logsOptions, cb: (error: any, response: responseData) => any): void;

  readTransactionLog(options: tansactionLogsOptions): Promise<any>;
  readTransactionLog(options: tansactionLogsOptions, cb: (error: any, response: responseData) => any): void;

  readTransactionLogByTimestamp(options: tansactionLogsByKeysOptions): Promise<any>;
  readTransactionLogByTimestamp(options: tansactionLogsByKeysOptions, cb: (error: any, response: responseData) => any): void;

  readTransactionLogByUsername(options: tansactionLogsByKeysOptions): Promise<any>;
  readTransactionLogByUsername(options: tansactionLogsByKeysOptions, cb: (error: any, response: responseData) => any): void;

  readTransactionLogByHashValue(options: tansactionLogsByKeysOptions): Promise<any>;
  readTransactionLogByHashValue(options: tansactionLogsByKeysOptions, cb: (error: any, response: responseData) => any): void;

  deleteTransactionLogsBefore(options: deleteTransactionLogsBeforeOptions): Promise<any>;
  deleteTransactionLogsBefore(options: deleteTransactionLogsBeforeOptions, cb: (error: any, response: responseData) => any): void;


  createAuthenticationTokens(options: createTokenOptions): Promise<any>;
  createAuthenticationTokens(options: createTokenOptions, cb: (error: any, response: responseData) => any): void;

  refreshOperationToken(options: refreshTokenOptions): Promise<any>;
  refreshOperationToken(options: refreshTokenOptions, cb: (error: any, response: responseData) => any): void;


  systemInformation(): Promise<any>;
  systemInformation(cb: (error: any, response: responseData) => any): void;

  deleteFilesBefore(options: deleteFilesBeforeOptions): Promise<any>;
  deleteFilesBefore(options: deleteFilesBeforeOptions, cb: (error: any, response: responseData) => any): void;

  getJobDetails(options: jobDetailsOptions): Promise<any>;
  getJobDetails(options: jobDetailsOptions, cb: (error: any, response: responseData) => any): void;

  getJobsByDate(options: jobsByDateOptions): Promise<any>;
  getJobsByDate(options: jobsByDateOptions, cb: (error: any, response: responseData) => any): void;
}

export interface harperDbConfigOptions {
  harperHost: string;
  username: string;
  password: string;
  token: string;
  schema: string;
}

export interface responseData {
  status: 'SUCCESS' | 'FAILURE';
  statusCode: number;
  operator: string;
  error: any;
  data: any;
}

export interface schemaOption {
  schema: string;
}

export interface tableOptions {
  schema?: string;
  table: string;
}

export interface createTableOptions extends tableOptions {
  hashAttribute: string;
}

export interface attributeOptions extends tableOptions {
  attribute: string;
}

export interface queryOptions extends tableOptions {
  records: object[];
}

export interface rowDeleteOptions extends tableOptions {
  hashValues: any[];
}

export interface hashSearchOptions extends tableOptions {
  hashValues: any[];
  attributes: string[];
}

export interface valueSearchOptions extends tableOptions {
  searchAttribute: string;
  searchValue: any;
  attributes: string[];
}


export interface dataLoadOptions extends tableOptions {
  action: 'insert' | 'update' | 'upsert';
  data: any;
}

export interface urlLoadOptions extends tableOptions {
  action: 'insert' | 'update' | 'upsert';
  url: string;
}

export interface userAddOptions {
  role: any;
  username: string;
  password: string;
  active: boolean;
}

export interface userAlterOptions {
  username: string;
  role?: any;
  password?: string;
  active?: boolean;
}

export interface userDropOptions {
  username: string;
}

export interface addRoleOptions {
  roleName: string;
  permission: object;
}

export interface alterRoleOptions {
  roleId: any;
  roleName?: string;
  permission?: object;
}

export interface dropRoleOptions{
  roleId: any;
}

export interface importFromS3Option extends tableOptions {
  action: 'insert' | 'update' | 'upsert';
}

export interface s3DetailsOptions {
  awsAccessKeyId: any;
  awsSecretAccessKey: any;
  bucket: any;
  key: any;
}

export interface logsOptions {
  limit: number;
  start: number;
  from: any;
  until: any;
  order: 'desc' | 'asc';
}

export interface transactionLogsOptions {
  schema: string;
  table: string;
}

export interface tansactionLogsByKeysOptions extends transactionLogsOptions {
  searchValues: any[];
}

export interface deleteTransactionLogsBeforeOptions extends transactionLogsOptions {
  timestamp: millisecondTime;
}

export interface createTokenOptions {
  username: string;
  password: string;
}

export interface refreshTokenOptions {
  token: string;
}

export interface deleteFilesBeforeOptions {
  schema: string;
  table: string;
  date: any;
}

export interface jobDetailsOptions {
  jobId: any;
}

export interface jobsByDateOptions {
  from: any;
  until: any;
}

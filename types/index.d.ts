export class Client {
  constructor (harperConfig: harperDbConfigOptions);

  authorize(cb: (error: any, response: responseData) => any): void;

  createSchema(options: schemaOption, cb: (error: any, response: responseData) => any): void;
  dropSchema(options: schemaOption, cb: (error: any, response: responseData) => any): void;
  describeSchema(options: schemaOption, cb: (error: any, response: responseData) => any): void;
  describeAll(cb: (error: any, response: responseData) => any): void;
  
  createTable(options: createTableOptions, cb: (error: any, response: responseData) => any): void;
  describeTable(options: tableOptions, cb: (error: any, response: responseData) => any): void;
  dropTable(options: tableOptions, cb: (error: any, response: responseData) => any): void;
  dropAttribute(options: attributeDropOptions, cb: (error: any, response: responseData) => any): void;

  query(sqlQuery: string, cb: (error: any, response: responseData) => any): void;
  insert(options: queryOptions, cb: (error: any, response: responseData) => any): void;
  update(options: queryOptions, cb: (error: any, response: responseData) => any): void;
  delete(options: rowDeleteOptions, cb: (error: any, response: responseData) => any): void;
  searchByHash(options: hashSearchOptions, cb: (error: any, response: responseData) => any): void;
  searchByValue(options: valueSearchOptions, cb: (error: any, response: responseData) => any): void;

  csvDataLoad(options: dataLoadOptions, cb: (error: any, response: responseData) => any): void;
  csvUrlLoad(options: urlLoadOptions, cb: (error: any, response: responseData) => any): void;

  listUsers(cb: (error: any, response: responseData) => any): void;
  userInfo(cb: (error: any, response: responseData) => any): void;
  addUser(options: userAddOptions, cb: (error: any, response: responseData) => any): void;
  alterUser(options: userAlterOptions, cb: (error: any, response: responseData) => any): void;
  dropUser(options: userDropOptions, cb: (error: any, response: responseData) => any): void;

  listRoles(cb: (error: any, response: responseData) => any): void;
  addRole(options: addRoleOptions, cb: (error: any, response: responseData) => any): void;
  alterRole(options: alterRoleOptions, cb: (error: any, response: responseData) => any): void;
  dropRole(options: dropRoleOptions, cb: (error: any, response: responseData) => any): void;
  
  systemInformation(cb: (error: any, response: responseData) => any): void;
  deleteFilesBefore(options: deleteFilesBeforeOptions, cb: (error: any, response: responseData) => any): void;
  exportToS3(s3Details: s3DetailsOptions, sqlQuery: string, cb: (error: any, response: responseData) => any): void;
  readLogs(logsOptions: logsOptions, cb: (error: any, response: responseData) => any): void;
  getJobDetails(options: jobDetailsOptions, cb: (error: any, response: responseData) => any): void;
  getJobsByDate(options: jobsByDateOptions, cb: (error: any, response: responseData) => any): void;
}

export interface harperDbConfigOptions {
  harperHost: string;
  username: string;
  password: string;
  schema: string;
}

export interface responseData {
  status: 'SUCCESS' | 'FAILURE';
  statusCode: number;
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

export interface attributeDropOptions extends tableOptions {
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
  data: any;
}

export interface urlLoadOptions extends tableOptions {
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
  role: string;
  permission: object;
  "permission.super_admin": boolean;
}

export interface alterRoleOptions {
  roleId: any;
  permission: object;
  "permission.super_admin": boolean;
}

export interface dropRoleOptions{
  roleId: any;
}

export interface deleteFilesBeforeOptions extends tableOptions {
  date: any;
}

export interface s3DetailsOptions {
  awsAccessKeyId: any;
  awsSecretAccessKey: any;
  bucket: any;
  key: any;
}

export interface logsOptions extends tableOptions {
  limit: number;
  start: number;
  from: any;
  until: any;
  order: 'desc' | 'asc';
}

export interface jobDetailsOptions extends tableOptions {
  jobId: any;
}

export interface jobsByDateOptions extends tableOptions{
  from: any;
  until: any;
}

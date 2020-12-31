# s3 Operations

## Import from S3

This operation allows users to import CSV or JSON files from an AWS S3 bucket as an insert, update, or upsert.

- `options (required)` - object containing db info of where to insert, update, or upsert records.
    - `action (optional)` - type of action you want to perform - 'insert', 'update', or 'upsert'. The default is 'insert'.
    - `schema (required)` - name of the schema where you are loading your data
    - `table (required)` - name of the table where you are loading your data

- `s3Detials (required)` - object containing required AWS S3 bucket infor for operation
    - `awsAccessKeyId (required)` - AWS access key for authenticating into your S3 bucket
    - `awsSecretAccessKey (required)` - AWS secret for authenticating into your S3 bucket
    - `bucket (required)` - AWS S3 bucket to import from
    - `key (required)` - the name of the file to import - the file must include a valid file extension ('.csv' or '.json')


```javascript
// import records from s3

const options = {
  action: 'insert',
  schema: 'dev',
  table: 'temp',
}

const s3Detials = {
  awsAccessKeyId: 'yourAccessKeyId',
  awsSecretAccessKey: 'yourAccessKey',
  bucket: 'bucketName',
  key: 'fileName.csv'
}


// Callback
client.importFromS3(options, s3Detials, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.importFromS3(options, s3Detials)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.importFromS3(options, s3Detials)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Export to S3

*Operation is restricted to super_user roles only*

- `searchOperation (required)` - object containing search_operation, any of search_by_hash, search_by_value or sql

- `s3Detials (required)` - object containing required AWS S3 bucket infor for operation
	- `awsAccessKeyId (required)` - AWS access key for authenticating into your S3 bucket
	- `awsSecretAccessKey (required)` - AWS secret for authenticating into your S3 bucket
	- `bucket (required)` - AWS S3 bucket to import from
	- `key (required)` - the name of the file to import - the file must include a valid file extension ('.csv' or '.json')

- `format (required)` - the format you wish to export the data, options are json & csv

```javascript
// export records to s3

// search_by_value option
const searchOperation = { 
  operation: 'search_by_value',
  schema: 'dev',
  table: 'temp',
  search_attribute: 'city',
  search_value: 'New York',
  get_attributes: ['*'],
}

// search_by_hash option
const searchOperation = { 
  operation: 'search_by_hash',
  schema: 'dev',
  table: 'temp',
  hash_value: [1,2],
  get_attributes: ['*'],
}

// sql option
const searchOperation = {
	operation: 'sql',
	sql: 'select * from dev.temp',
}


const s3Detials = {
  awsAccessKeyId: 'yourAccessKeyId',
  awsSecretAccessKey: 'yourAccessKey',
  bucket: 'bucketName',
  key: 'fileName.csv'
}


// Callback
client.exportToS3(searchOperation, s3Detials, 'csv', (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.exportToS3(searchOperation, s3Detials, 'csv')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.exportToS3(searchOperation, s3Detials, 'csv')
  console.log(res);
} catch(err) {
  console.log(err);
}
```

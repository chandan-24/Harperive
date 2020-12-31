# Utilities Operations

## Delete Files Before

*Operation is restricted to super_user roles only*

This operation will delete all records of a table before a given date exclusively on the node where it is executed. Any clustered nodes with replicated data will retain that data.

- `date (required)` - records older than this date will be deleted.
- `schema (required)` - name of the schema where you are deleting your data
- `table (required)` - name of the table where you are deleting your data

```javascript
const options = {
  schema: 'dev',
  table: 'temp',
  date: '2020-05-31',
};

// Callback
client.deleteFilesBefore(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.deleteFilesBefore(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.deleteFilesBefore(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Get system Information

```javascript
// Callback
client.systemInformation((err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.systemInformation()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.systemInformation()
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Get job details for a given jod id

- `jobId (required)` : job id of the job you wish to view

```javascript
const options = {
  jobId: 'f13d813f-64d9-44d8-9a39-7135136c7b92'
};

// Callback
client.getJobDetails(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.getJobDetails(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.getJobDetails(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Get all jobs between dates

- `from (required)` - the date you wish to start the search
- `until (required)` - the date you wish to end the search

```javascript
const options = {
  from: "2020-05-31",
  until: "2020-06-02",
};

// Callback
client.getJobsByDate(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.getJobsByDate(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.getJobsByDate(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

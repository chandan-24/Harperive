# Read DB Logs

*Operation is restricted to super_user roles only*

## Read HarperDB Log between dates

- `limit (optional)` - number of results returned. Default behavior is 100. Must be a number.
- `start (optional)` -result to start with. Must be a number.
- `from (required)` -date to begin showing log results. Must be "YYYY-MM-DD" or "YYYY-MM-DD hh:mm:ss"
- `until (required)` -date to end showing log results. Must be "YYYY-MM-DD" or "YYYY-MM-DD hh:mm:ss"
- `order (optional)` order to display logs desc or asc by timestamp

```javascript
const options = {
  limit:1000,
  start:0,
  from:"2020-06-01 17:00:00",
  until:"2020-06-01 21:00:00",
  order:"desc"
};

// Callback
client.readLogs(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.readLogs(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.readLogs(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Read Transaction Log

- `schema (required)` - schema under which the transaction log resides
- `table (required)` - table under which the transaction log resides

```javascript
const options = {
  schema: 'dev',
  table: 'temp',
};

// Callback
client.readTransactionLog(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.readTransactionLog(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.readTransactionLog(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```


## Read Transaction Log by timestamp

- `schema (required)` - schema under which the transaction log resides
- `table (required)` - table under which the transaction log resides
- `searchValues (required)` - An array containing a maximum of two values [from_timestamp, to_timestamp] defining the range of transactions you would like to view
  - Timestamp format is millisecond-based epoch in UTC
  - If no items are supplied then all transactions are returned
  - If only one entry is supplied then all trnasactions after the supplied timestamp will be returned

```javascript
const options = {
  schema: 'dev',
  table: 'temp',
  searchValues: [1598290235769, 1598290282817],
};

// Callback
client.readTransactionLogByTimestamp(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.readTransactionLogByTimestamp(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.readTransactionLogByTimestamp(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```


## Read Transaction Log by username

- `schema (required)` - schema under which the transaction log resides
- `table (required)` - table under which the transaction log resides
- `searchValues (required)` - array of HarperDB user for whom you would like to view transactions

```javascript
const options = {
  schema: 'dev',
  table: 'temp',
  searchValues: ["HDB_ADMIN"],
};

// Callback
client.readTransactionLogByUsername(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.readTransactionLogByUsername(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.readTransactionLogByUsername(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Read Transaction Log by hash_value

- `schema (required)` - schema under which the transaction log resides
- `table (required)` - table under which the transaction log resides
- `searchValues (required)` - An array of hash_attributes's values for which you wish to see transaction logs

```javascript
const options = {
  schema: 'dev',
  table: 'temp',
  searchValues: [3, 5, 7],
};

// Callback
client.readTransactionLog(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.readTransactionLog(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.readTransactionLog(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Delete Transaction Log Before

- `schema (required)` - schema under which the transaction log resides
- `table (required)` - table under which the transaction log resides
- `timestamp (required)` - records older than this date will be deleted. Format is millisecond-based epoch in UTC

```javascript
const options = {
  schema: 'dev',
  table: 'temp',
  timestamp: 1598290282817,
};

// Callback
client.deleteTransactionLogsBefore(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.deleteTransactionLogsBefore(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.deleteTransactionLogsBefore(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

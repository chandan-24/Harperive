# Query Operations

## SQL Query

- `query (required)` - use standard SQL (string)

_Refer harperDB SQL guide [here](https://harperdbhelp.zendesk.com/hc/en-us/articles/115002146754-HarperDB-SQL-Guide), for more information on quering complex sql queries._

```javascript
// insert operation sql
const query = "insert into organisation.users (user_id, username, first_name, middle_name, last_name) values(20201, 'richy_rich', 'Richard', 'H.', 'Cole')";

//select
const querySelect = "select * from organisation.users where id = 1";

// update
const queryUpdate = "update organisation.users set first_name = 'penelope' where id = 1";

// delete
const queryDelete = "DELETE FROM organisation.users WHERE id = 1";

//Callback
client.query(query, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.query(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.query(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## NoSQL Queries

### Insert Record(s)

- `schema (optional)` - schema is where the table you are inserting records into lives
- `table (required)` - table where you want to insert records
- `records (required)` - array of one or more records for insert

NOTE: Hash value of the inserted JSON record MUST be supplied on insert.

```javascript
const options = {
  // schema is not passed here since it has been passed while creating client
  table: 'users',
  records: [
    {
      user_id: 342,
      username: 'samf12',
      first_name: 'Sam',
      last_name: 'Fag'
    },
    {
      user_id: 43,
      username: 'simon_j',
      first_name: 'James',
      middle_name: 'J.',
      last_name: 'Simon'
    }
  ]
};

// Callback
client.insert(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.insert(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.insert(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

### Update Record(s)

- `schema (optional)` - schema of the table you are updating records into
- `table (required)` - table where you want to update records
- `records (required)` - array of one or more records for update

NOTE: Hash value of the updated JSON record MUST be supplied on update.

```javascript
const options = {
  // schema is not passed here since it has been passed while creating client
  table: 'users',
  records: [
    {
      first_name: 'Rajesh',
      last_name: 'Ranjan',
      user_id: 213,
      username: 'rajesh'
    }
  ]
};

// Callback
client.update(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.update(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.update(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

### Upsert Record(s)

- `schema (optional)` - schema of the table you are upserting records into
- `table (required)` - table where you want to upsert records
- `records (required)` - array of one or more records for upsert

```javascript
const options = {
  // schema is not passed here since it has been passed while creating client
  table: 'users',
  records: [
    {
      first_name: 'Rajesh',
      last_name: 'Ranjan',
      user_id: 213,
      username: 'rajesh'
    }
  ]
};

// Callback
client.upsert(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.upsert(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.upsert(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

### Delete Record(s)

- `schema (optional)` - schema is where the table you are deleting records into lives
- `table (required)` - table where you want to deleting records
- `hashValues (required)` - array of one or more hash attribute (primary key) values, which identifies records to delete

```javascript

const options = {
  // schema is not passed here since it has been passed while creating client
  table: 'users',
  hashValues: [342]
};

// Callback
client.delete(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.delete(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.delete(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

### Search by hash

- `schema (optional)` - schema is where the table you are searching lives
- `table (required)` - table you wish to search
- `hashValues(required)` - array of hashes to retrive
- `attributes (required)` - (Array of string) define which attributes you want returned. _Use '*' to return all attributes_

```javascript
const options = {
  // schema is not passed here since it has been passed while creating client
  table: 'users',
  hashValues: ['43', '213'],
  attributes: ['*'],
};

// Callback
client.searchByHash(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.searchByHash(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.searchByHash(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

### Search by value

- `schema (optional)` - schema is where the table you are searching lives
- `table (required)` - table you wish to search
- `searchAttribute (required)` - attribute you wish to search can be any attribute
- `searchValue (required)` - value you wish to search - wild cards are allowed.
- `attributes (required)` - (Array of string) define which attributes you want returned. _Use '*' to return all attributes._

```javascript
const options = {
  // schema is not passed here since it has been passed while creating client
  table: 'users',
  searchAttribute: "username",
  searchValue: 'simon_j',
  attributes: ['*'],
};

// Callback
client.searchByValue(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.searchByValue(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.searchByValue(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

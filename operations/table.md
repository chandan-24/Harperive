# Table Operations

## Create Table

- `schema (optional)` - name of the schema where you want your table to live. (*If passed while creating client then don't need to pass it again.*)
- `table (required)` - name of the table you are creating
- `hashAttribute (required)` - hash(primary key) for the table

```javascript
const options = {
  schema: "organisation",
  table: 'users',
  hashAttribute: 'user_id',
};

// Callback
client.createTable(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.createTable(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.createTable(options)
  console.log(res);
} catch(err) {
  console.log(err);
}

```

## Describe Table

- `schema (optional)` - schema is where the table you wish to describe lives.
- `table (required)` - table you wish to describe.

```javascript
const options = {
  schema: "organisation",
  table: 'users',
};

// Callback
client.describeTable(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.describeTable(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.describeTable(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Drop Table

- `schema (optional)` - schema is where the table you are dropping lives.
- `table (required)` - name of the table you are dropping.

NOTE: Dropping a table will delete all associated records in that table.

```javascript
const options = {
  schema: "organisation",
  table: 'users',
};

// Callback
client.dropTable(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.dropTable(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.dropTable(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Create Attribute for a table

- `schema (optional)` - schema is where the table you are dropping lives.
- `table (required)` - table where the attribute you are dropping lives.
- `attribute (required)` - attribute name to be created in the table.


```javascript
const options = {
  schema: "organisation",
  table: 'users',
  attribute: 'user_id',
};

// Callback
client.createAttribute(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.createAttribute(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.createAttribute(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Drop Attribute of a table

- `schema (optional)` - schema is where the table you are dropping lives.
- `table (required)` - table where the attribute you are dropping lives.
- `attribute (required)` - attribute that you intend to drop.

NOTE: Dropping an attribute will delete all associated values in that table.

```javascript
const options = {
  schema: "organisation",
  table: 'users',
  attribute: 'user_id',
};

// Callback
client.dropAttribute(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.dropAttribute(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.dropAttribute(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

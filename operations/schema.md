# Schema Operations

## Query options

- `schema (required)` - name of schema you wish to create, drop, describe

## Create Schema

```javascript
// create new schema
const options = { schema: "organisation" };

// Callback
client.createSchema(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.createSchema(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.createSchema(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Describe Schema

```javascript
// describe schema
const options = { schema: "organisation" };

// Callback
client.describeSchema(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.describeSchema(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.describeSchema(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Drop Schema

NOTE: Dropping a schema will delete all tables and all of their records in that schema.

```javascript
// drop schema
const options = { schema: "organisation" };

// Callback
client.dropSchema(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.dropSchema(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.dropSchema(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Describe All Schema

```javascript
// describe every schema and tables
// Callback
client.describeAll((err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.describeAll()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.describeAll(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

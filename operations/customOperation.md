# Execute Custom Operation

A method exposed to execute custom operation, refer HarperDB api docs for various operations.

- `operation (required)`: harperDB operation
- `other fields (required)`: other fields needed for this operation 

```javascript
const options = {
  operation: 'harperdb_operation',
  other fields...
};

// Callback
client.executeOperation(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.executeOperation(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.executeOperation(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

# CSV Operations

## csv data load

- `action (optional)` - type of action you want to perform - 'insert', 'update', or 'upsert'. The default is 'insert'.
- `schema (required)` - name of the schema where you are loading your data
- `table (required)` - name of the table where you are loading your data
- `data (required)` - csv data to import into HaprerDB

```javascript
// install neat-csv package in your project
const neatCsv = require('neat-csv');
const fs = require('fs');

// First we load csv data from file into a variable and then pass in the query.

fs.readFile('./data/techCrunch.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const csvData = await neatCsv(data);
  const options = {
    schema: 'dev',
    table: 'breeds',
    data: csvData,
  }

  // Callback
  client.csvDataLoad(options, (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  });

  // Promise
  client.csvDataLoad(options)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  // Async/await
  try {
    const res = await client.csvDataLoad(options)
    console.log(res);
  } catch(err) {
    console.log(err);
  }
})
```

## csv url load

- `action (optional)` - type of action you want to perform - 'insert', 'update', or 'upsert'. The default is 'insert'.
- `schema (required)` - name of the schema where you are loading your data
- `table (required)` - name of the table where you are loading your data
- `url (required)` - URL of the csv file

```javascript
const url = 'https://s3.amazonaws.com/complimentarydata/breeds.csv';

const options = {
  schema: 'dev',
  table: 'breeds',
  url,
}

// Callback
client.csvUrlLoad(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.csvUrlLoad(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.csvUrlLoad(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

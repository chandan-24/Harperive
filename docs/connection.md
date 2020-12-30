# Connection

You need to create a **DB Client** with following parameters passing the appropriate values and then you can perform any db operation.

## DB_CONFIG

- `harperHost` - host name of the harperdb server, *example: `https://harper-test-dev.harperdbcloud.com`*
- `username` - username of your db user
- `password` - password of the user
- `token (optional)` - jwt authentication token, pass either username/password or token for authorised database operation.
- `schema (optional)` - schema name, if not passed while creating client then need to be passed while calling operations. (*Passing schema lets you perform CRUD operations on that schema*)

## Example

``` javascript
const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  token: process.env.OPERATION_TOKEN, // pass either username/password or token
  schema: process.env.SCHEMA, // optional params
  
  /* Alternatively schema can be passed in the options while quering for any
  *  operations on specific schema. 
  *  Refer bewlow on how to execute operation for more clarification.
  */
}

const Client = harperive.Client;
const client = new Client(DB_CONFIG);

// function call with callback

client.dbOperation(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// function call expecting promise

client.dbOperation(options)
  .then(res => console.log(res))
  .catch(err => console.log(err));

// function call as async/await expecting promise

async function executeQuery() {
  try {
    const res = await client.dbOperation(options)
    console.log(res);
  } catch(err) {
    console.log(err);
  }
}

executeQuery();
```

## Response Format
``` javascript
/*
* success response (recieved in 2nd arg of the callback or
* resolved when called as promise)
*/
{ 
  statusCode: 200,
  status: 'SUCCESS',
  operation: 'search_by_value',
  data: 
  [ 
    { 
      __createdtime__: 1591894774234,
       __updatedtime__: 1591894774234,
       country: 'BELGIUM',
       date: '1810-05-13',
       id: 15,
       image: '',
       name: 'BELGIAN SHEPHERD DOG',
       section: 'Sheepdogs'
    }
  ]
}

/*
* failure(error) response (recieved in 1st arg of the callback or
* rejected when called as promise)
*/
{ 
  error: 'unknown attribute \'address\'',
  statusCode: 500,
  status: 'FAILED',
  operation: 'search_by_value'
}
```
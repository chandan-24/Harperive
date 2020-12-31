<p align="center">
  <a href="https://github.com/chandan-24/Harperive">
    <img width="250" src="https://img.techpowerup.org/200604/harperive.png" alt="Harperive logo">
  </a>

  <p align="center" style="font-size: 200%">A NodeJs Client for HarperDB</p>

  <p align="center">
    <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/chandan-24/Harperive.svg?logo=lgtm&logoWidth=18?style=flat"/>
    <img alt="MIT License" src="https://img.shields.io/github/license/chandan-24/Harperive?style=flat"/>
    <a href="https://www.npmjs.com/package/harperive">
      <img alt="Current npm package version." src="https://img.shields.io/npm/v/harperive?color=green&label=npm%20package" />
    </a>
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/harperive.svg?color=green" />
    <img alt="Github Stars" src="https://img.shields.io/github/stars/chandan-24/Harperive?color=green" />
  </p>
</p>

---

## Introduction

_**HarperDB** is a SQL/NoSQL data management platform. It is fully indexed, doesn't duplicate data, and runs on any device- from the edge to the cloud._

It is built natively as a set of micro-services, making development and integration easy and seamless.  HarperDB utilizes a single-endpoint for all operations.  HarperDB’s RESTful nature makes it stateless, stable, and scalable.

_**Harperive** is a node.js driver for HarperDb._

It is written in JavaScript, it natively supports promises and functions can be executed with callbacks. Each HarperDb operation is exposed as a function on the client object. All functions take query options and an optional callback function.

## Documentation

See the official documentation website [here](https://chandan-24.github.io/Harperive/#/)


## Installation

Follow the instructions on the [HarperDB get started page](https://harperdb.io/developers/get-started/) for installation and get HarperDB up and running.

Harperive is available as an [npm package](https://www.npmjs.com/package/harperive).

``` bash
# installs the package for your project

npm install harperive --save
```

## Connection

You need to create a **DB Client** with following parameters passing the appropriate values and then you can perform any db operation.

### DB_CONFIG

- `harperHost` - host name of the harperdb server, *example: `https://harper-test-dev.harperdbcloud.com`*
- `username` - username of your db user
- `password` - password of the user
- `token (optional)` - jwt authentication token, pass either username/password or token for authorised database operation.
- `schema (optional)` - schema name, if not passed while creating client then need to be passed while calling operations. (*Passing schema lets you perform CRUD operations on that schema*)

### Example

``` javascript
const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  token: process.env.OPERATION_TOKEN, // pass either username/password or token
  schema: process.env.SCHEMA, // optional params
  
  /* Alternatively schema can be passed in the options while quering for any operations on specific schema. 
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

### Response Format
``` javascript
// success response (recieved in 2nd arg of the callback / resolved when called as promise)
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

// failure(error) response (recieved in 1st arg of the callback / rejected when called as promise)
{ 
  error: 'unknown attribute \'address\'',
  statusCode: 500,
  status: 'FAILED',
  operation: 'search_by_value'
}
```

## LICENSE - "MIT"

Copyright (c) 2020 Chandan Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

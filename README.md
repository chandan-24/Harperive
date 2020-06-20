<p>
  <a href="#"><img width="250" src="https://img.techpowerup.org/200604/harperive.png" alt="Harperive logo"></a>
</p>

# A NodeJs Client for HarperDB

## Introduction

_**HarperDB** is a SQL/NoSQL data management platform. It is fully indexed, doesn't duplicate data, and runs on any device- from the edge to the cloud._

It is built natively as a set of micro-services, making development and integration easy and seamless.  HarperDB utilizes a single-endpoint for all operations.  HarperDB’s RESTful nature makes it stateless, stable, and scalable.

## Table of Contents

- [Installation](##installation)
- [Connection](##connection)
- [Operations](##operations)
  - [Schema](###schema)
  - [Table](#table)
  - [Query](#query)
  - [User](#user)
  - [Role](#role)
  - [Utilities](#utilities)
- [LICENSE - "MIT"](##license---"mit")

## Installation

Follow the instructions on the [HarperDB get started page](https://harperdb.io/developers/get-started/) for installation and get HarperDB up and running.

Harperive is available as an [npm package](!npm).

``` bash
# installs the package for your project

npm install harperive
```

## Connection

### Options

- `harperHost` - host name of the harperdb server, example: `harper-test-dev.harperdbcloud.com`
- `username` - username of your db user
- `password` - passwprd of the user
- `schema (optional)` - schema name, if not passed while creating client then need to passed while calling operations.

### Example

``` javascript
const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  schema: process.env.SCHEMA, // optional params
  
  /* Alternatively schema can be passed in the options while quering for any operations
  *  on specific schema. Refer documanation for more clarification.
  */
}

const Client = harperive.Client;
const client = new Client(DB_CONFIG);

client.anyOperation(options, (err, res) => {
  if(err) console.log(err);
  console.log(res);
});
```

## Operations

Various database operations are made available as REST api to interact with harperdb instance

Vist [harperdb-harperive-example](https://github.com/chandan-24/harperdb-harperive-example#readme) for example code on performing various database operations in a nodeJs applications.

### Schema

- `schema (required) - name of schema you wish to create, drop, describe`

**`Create Schema`** :

```javascript
// create new schema

client.createSchema(
  { schema: "organisation" },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

**`Describe Schema`** :

```javascript
// describe schema

client.describeSchema(
  {schema: "temp"},
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

**`Drop Schema`** :

NOTE: Dropping a schema will delete all tables and all of their records in that schema.

```javascript
// drop schema

client.dropSchema(
  {schema: "temp"},
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

**`Describe All Schema`** :

```javascript
// describe every schema and tables

client.describeAll(
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

### Table

**`Create Table`** :

- `schema (required)` - name of the schema where you want your table to live
- `table (required)` - name of the table you are creating
- `hash_attribute (required)` - hash for the table

```javascript
client.createTable(
  {
    schema: "organisation",
    table: 'users',
    hashAttribute: 'user_id',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);

```

**`Describe Table`** :

- `schema (required)` - schema where the table you wish to describe lives.
- `table (required)` - table you wish to describe.

```javascript
client.describeTable(
  {
    schema: "organisation",
    table: 'users',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

**`Drop Table`** :

- `schema (required)` - schema where the table you are dropping lives.
- `table (required)` - name of the table you are dropping.

NOTE: Dropping a table will delete all associated records in that table.

```javascript
client.dropTable(
  {
    schema: "organisation",
    table: 'users',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

**`Drop Attribute of a table`** :

- `schema (required)` - schema where the table you are dropping lives.
- `table (required)` - table where the attribute you are dropping lives.
- `attribute (required)` - attribute that you intend to drop.

NOTE: Dropping an attribute will delete all associated values in that table.

```javascript
client.dropAttribute(
  {
    schema: "organisation",
    table: 'users',
    attribute: 'usename',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

### Query

### User

### Role

### Utilities

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

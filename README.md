<p>
  <a href="#"><img width="250" src="https://img.techpowerup.org/200604/harperive.png" alt="Harperive logo"></a>
</p>

# A NodeJs Client for HarperDB

## Introduction

_**HarperDB** is a SQL/NoSQL data management platform. It is fully indexed, doesn't duplicate data, and runs on any device- from the edge to the cloud._

It is built natively as a set of micro-services, making development and integration easy and seamless.  HarperDB utilizes a single-endpoint for all operations.  HarperDB’s RESTful nature makes it stateless, stable, and scalable.

## Table of Contents

- [Installation](#installation)
- [Connection](#connection)
- [Operations](#operations)
  - [Schema](#schema)
  - [Table](#table)
  - [Query](#query)
  - [User](#user)
  - [Role](#role)
  - [Utilities](#utilities)
- [LICENSE - "MIT"](#license---"mit")

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

- `schema (required)` - name of schema you wish to create, drop, describe

#### Create Schema

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

#### Describe Schema

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

#### Drop Schema

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

#### Describe All Schema

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

#### Create Table

- `schema (required)` - name of the schema where you want your table to live
- `table (required)` - name of the table you are creating
- `hash_attribute (required)` - hash(primary key) for the table

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

#### Describe Table

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

#### Drop Table

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

#### Drop Attribute of a table

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

#### sql Query

- `query (required)` - use standard SQL

_Refer harperDB SQL guide [here](https://harperdbhelp.zendesk.com/hc/en-us/articles/115002146754-HarperDB-SQL-Guide), for more information on quering complex sql queries._

```javascript
// insert operation sql

const query = "insert into organisation.users (user_id, username, first_name, middle_name, last_name) values(20201, 'richy_rich', 'Richard', 'H.', 'Cole')"

client.query(
  query,
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);

//select
const query = "select * from organisation.users where id = 1"

// update
const query = "update organisation.users set first_name = 'penelope' where id = 1"

// delete
const query = "DELETE FROM organisation.users WHERE id = 1"
```

#### noSql Query

**Insert Record(s)**

- `schema (optional)` - schema where the table you are inserting records into lives
- `table (required)` - table where you want to insert records
- `records (required)` - array of one or more records for insert

NOTE: Hash value of the inserted JSON record MUST be supplied on insert.

```javascript
client.insert(
  {
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
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

**Update Record(s)**

- `schema (optional)` - schema of the table you are updating records into
- `table (required)` - table where you want to update records
- `records (required)` - array of one or more records for update

NOTE: Hash value of the updated JSON record MUST be supplied on update.

```javascript
client.update(
  {
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
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

**Delete Record(s)**

- `schema (optional)` - schema where the table you are deleting records into lives
- `table (required)` - table where you want to deleting records
- `hash_values (required)` - array of one or more hash attribute (primary key) values, which identifies records to delete

```javascript
client.delete(
  {
    // schema is not passed here since it has been passed while creating client
    table: 'users',
    hashValues: [342]
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

**Search by hash**

- `schema (optional)` - schema where the table you are searching lives
- `table (required)` - table you wish to search
- `hash_attribute (required)` - hash_attribute for table you are searching. defined in add table
- `hash_values(required)` - array of hashes to retrive
- `get_attributes (required)` - define which attributes you want returned. Use '*' to return all attributes

```javascript
client.searchByHash(
  {
    // schema is not passed here since it has been passed while creating client
    table: 'users',
    hashValues: ['43', '213'],
    attributes: ['*'],
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

**Search by value**

- `schema (optional)` - schema where the table you are searching lives
table (required)` - table you wish to search
- `search_attribute (required)` - attribute you wish to search can be any attribute
- `search_value (required)` - value you wish to search - wild cards are allowed.
- `get_attributes (required)` - define which attributes you want returned. Use '*' to return all attributes.

```javascript
client.searchByValue(
  {
    // schema is not passed here since it has been passed while creating client
    table: 'users',
    searchAttribute: "username",
    searchValue: 'simon_j',
    attributes: ['*'],
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

#### CSV operations

**csv url load**

```javascript
const url = 'https://s3.amazonaws.com/complimentarydata/breeds.csv';

client.csvUrlLoad(
  {
    schema: 'dev',
    table: 'breeds',
    url: url,
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res.data);
  }
)
```

**csv data load**

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

  client.csvDataLoad(
    {
      schema: 'cars',
      table: 'tech_crunch_funding',
      data: csvData,
    },
    (err, res) => {
      if(err) console.log(err);
      else console.log(res);
    }
  )
})
```

### User

#### Add User

- `username (required)` : username for your user
- `password (required)` : password
- `role(required)` : role id for which you want to create user
- `active(required)` : boolean value

```javascript
// add new user for a given role

client.addUser(
  {
    username: 'junior_support',
    password: 'org@123',
    role: '13fbcbf3-394f-4350-94df-3eed8ff4d2fc',
    active: true
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

#### Alter User

```javascript
// update role, password or status of a user

client.alterUser(
  {
    username: 'junior_support',
    password: 'junior@org',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

#### Drop User

```javascript
// delete a user

client.dropUser(
  {
    username: 'junior_support',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

#### List Users

```javascript
// list all user

client.listUsers(
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

#### User Info

```javascript
// get the details of current user used for creating client

client.userInfo(
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
```

### Role

#### Add Role

- `roleName (required)` : name of your role
- `super_admin (optional)` : boolean value
- `permission (required)` : follow following syntax to define a permission

```javascript
const permission = {
  "schema_name": {
    "tables": {
      "table_name": {
        read: Boolean,
        insert: Boolean,
        update: Boolean,
        delete: Boolean,
        "attribute_restrictions": [
          {
            "attribute_name": 'nameOfAttribute',
            read: Boolean,
            insert: Boolean,
            update: Boolean,
            delete: Boolean,
          },
        ]
      }
    },
    "more_table": {},
  },
  "more_schema": {},
  "cluster_user": Boolean,
  "super_user": Boolean,
}
```

```javascript
// add new role

client.addRole(
  {
    roleName: 'support',
    super_admin: false,
    permission: {
      organisation: {
        tables: {
          users: {
            read: true,
            insert: true,
            update: true,
            delete: false,
            attribute_restrictions: []
          }
        }
      }
    }
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

#### Alter Role

```javascript
// update permissions for a role

client.alterRole(
  {
    roleId: '13fbcbf3-394f-4350-94df-3eed8ff4d2fc',
    super_admin: true,
    permission: {
      organisation: {
        tables: {
          users: {
            read: true,
            insert: false,
            update: true,
            delete: false,
            attribute_restrictions: [
              {
                attribute_name: 'username',
                read: true,
                insert: false,
                update: false,
                delete: false,
              },
            ]
          }
        }
      }
    }
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

#### Drop Role

- `roleId (required)` : role id of the role you wish to delete

```javascript
client.dropRole(
  {
    roleId: 'b746dd2e-a09f-485c-8a79-26ef6d29dabf'
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

#### List Roles

```javascript
// List all roles

client.listRoles(
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)
```

### Utilities Operations

#### Delete all records of a table before a given date

- `date (required)` - records older than this date will be deleted
- `schema (required)` - name of the schema where you are deleting your data
- `table (required)` - name of the table where you are deleting your data

```javascript
client.deleteFilesBefore(
  {
    schema: 'cars',
    table: 'tech_crunch_funding',
    date: '2020-05-31',
  },
  (err, res) => {
  if(err) console.log(err);
  else console.log(res);
})
```

#### Export records to AWS S3(currently code not written)

Coming Soon ...

#### Fetch db logs between dates

- `limit (optional)` - number of results returned. Default behavior is 100. Must be a number.
- `start (optional)` -result to start with. Must be a number.
- `from (required)` -date to begin showing log results. Must be "YYYY-MM-DD" or "YYYY-MM-DD hh:mm:ss"
- `until (required)` -date to end showing log results. Must be "YYYY-MM-DD" or "YYYY-MM-DD hh:mm:ss"
- `order (optional)` order to display logs desc or asc by timestamp

```javascript
client.readLogs(
  {
    limit:1000,
    start:0,
    from:"2020-06-01 17:00:00",
    until:"2020-06-01 21:00:00",
    order:"desc"
  },
  (err, res) => {
  if(err) console.log(err);
  else console.log(res);
})
```

#### Get system Information

```javascript
client.systemInformation((err, res) => {
  if(err) console.log(err);
  else console.log(res);
})
```

#### Get job details for a given jod id

- `jobId (required)` : job id of the job you wish to view

```javascript
client.getJobDetails(
  { jobId: 'f13d813f-64d9-44d8-9a39-7135136c7b92' },
  (err, res) => {
  if(err) console.log(err);
  else console.log(res);
})
```

#### Get all jobs between dates

- `from (required)` - the date you wish to start the search
- `until (required)` - the date you wish to end the search

```javascript
client.getJobsByDate(
  {
    from: "2020-05-31",
    until: "2020-06-02",
  },
  (err, res) => {
  if(err) console.log(err);
  else console.log(res);
})
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

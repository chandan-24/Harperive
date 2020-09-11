<p>
  <a href="#"><img width="250" src="https://img.techpowerup.org/200604/harperive.png" alt="Harperive logo"></a>
</p>

# A NodeJs Client for HarperDB

## Introduction

_**HarperDB** is a SQL/NoSQL data management platform. It is fully indexed, doesn't duplicate data, and runs on any device- from the edge to the cloud._

It is built natively as a set of micro-services, making development and integration easy and seamless.  HarperDB utilizes a single-endpoint for all operations.  HarperDB’s RESTful nature makes it stateless, stable, and scalable.

## Table of Contents

- [Features](#features)
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

## Features

### Verstile function calls

Every DB Operation can performed with *Callback* as well as it returns *Promise*. See, [how it works?](##example)

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
- `schema (optional)` - schema name, if not passed while creating client then need to be passed while calling operations. (*Passing schema lets you perform CRUD operations on that schema*)

### Example

``` javascript
const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
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

## Operations

Various database operations are made available as REST api to interact with harperdb instance

Vist [harperdb-harperive-example](https://github.com/chandan-24/harperdb-harperive-example#readme) for example code on performing various database operations in a nodeJs applications.

### Schema

- `schema (required)` - name of schema you wish to create, drop, describe

#### Create Schema

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

#### Describe Schema

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

#### Drop Schema

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

#### Describe All Schema

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

### Table

#### Create Table

- `schema (optional)` - name of the schema where you want your table to live. (*If passed while creating client then don't need to pass it again.*)
- `table (required)` - name of the table you are creating
- `hash_attribute (required)` - hash(primary key) for the table

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

#### Describe Table

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

#### Drop Table

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

#### Drop Attribute of a table

- `schema (optional)` - schema is where the table you are dropping lives.
- `table (required)` - table where the attribute you are dropping lives.
- `attribute (required)` - attribute that you intend to drop.

NOTE: Dropping an attribute will delete all associated values in that table.

```javascript
const options = {
  schema: "organisation",
  table: 'users',
  hashAttribute: 'user_id',
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

### Query

#### sql Query

- `query (required)` - use standard SQL

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

#### noSql Query

**Insert Record(s)**

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

**Update Record(s)**

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

**Delete Record(s)**

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

**Search by hash**

- `schema (optional)` - schema is where the table you are searching lives
- `table (required)` - table you wish to search
- `hashValues(required)` - array of hashes to retrive
- `attributes (required)` - define which attributes you want returned. Use '*' to return all attributes

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

**Search by value**

- `schema (optional)` - schema is where the table you are searching lives
- `table (required)` - table you wish to search
- `searchAttribute (required)` - attribute you wish to search can be any attribute
- `searchValue (required)` - value you wish to search - wild cards are allowed.
- `attributes (required)` - define which attributes you want returned. Use '*' to return all attributes.

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

#### CSV operations

**csv url load**

- `action (optional)` - type of action you want to perform. Options are insert or update, default is insert
- `schema (required)` - name of the schema where you are loading your data
- `table (required)` - name of the table where you are loading your data
- `csv_url (required)` - URL of the csv file

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

**csv data load**

- `action (optional)` - type of action you want to perform. Options are insert or update, default is insert
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

### Role

HarperDB utilizes a Role-Based Access Control (RBAC) framework to manage access to HarperDB instances.  A user is assigned a role that determines the user's permissions to access database resources and run core operations. _Follow the [link](https://harperdbhelp.zendesk.com/hc/en-us/articles/360051486534-Managing-Role-Permissions?utm_campaign=Product%20Releases&utm_medium=email&_hsmi=93819466&_hsenc=p2ANqtz-_zMPdYFSW6dkxd9Sy8XT4DatGl4X3POK1WNs7YIhmcoCHVprWJcaMeaufik0PKKVa5pxikXiizBsgcUNrHnm1fE0WnAkiWjnWl0UFrGsEZ72jhugo&utm_content=93819466&utm_source=hs_email) for more information on roles_

#### Add Role

- `roleName (required)` : name of your role
- `permission (required)` : follow below syntax to define a permission

```javascript
const permission = {
  "schema_name": {
    "tables": {
      "table_name": {
        read: Boolean,
        insert: Boolean,
        update: Boolean,
        delete: Boolean,
        "attribute_permissions": [
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
    "more_table_name": {},
  },
  "more_schema_name": {},
  "cluster_user": Boolean,
  "super_user": Boolean,
}
```

```javascript
// add new role
const options = {
  roleName: 'support',
  permission: {
    organisation: {
      tables: {
        users: {
          read: true,
          insert: true,
          update: true,
          delete: false,
          attribute_permissions: []
        }
      }
    }
  }
};


// Callback
client.addRole(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.addRole(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.addRole(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

#### Alter Role

- `roleId (required)`: the id value for the role you are altering
- `role (optional)`: name value to update on the role you are altering
- `permission (required)`: object defining permissions for users associated with this role

```javascript
// update permissions for a role

const options = {
  roleId: '13fbcbf3-394f-4350-94df-3eed8ff4d2fc',
  permission: {
    organisation: {
      tables: {
        users: {
          read: true,
          insert: false,
          update: true,
          delete: false,
          attribute_permissions: [
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
};

// Callback
client.alterRole(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.alterRole(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.alterRole(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

#### Drop Role

- `roleId (required)` : role id of the role you wish to delete

```javascript
const options = {
  roleId: 'b746dd2e-a09f-485c-8a79-26ef6d29dabf'
}

// Callback
client.listRoles(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.listRoles(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.listRoles(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

#### List Roles

```javascript
// List all roles

// Callback
client.listRoles((err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.listRoles()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.listRoles()
  console.log(res);
} catch(err) {
  console.log(err);
}
```

### User
*Operation is restricted to super_user roles only*

#### Add User

- `username (required)` - username assigned to the user. It can not be altered after adding the user. It serves as the hash.
- `password (required)` - clear text for password. HarperDB will encrypt the password upon reciept. 
- `role(required)` : role id for which you want to create user.

```javascript
// add new user for a given role

const options = {
  username: 'junior_support',
  password: 'org@123',
  role: '13fbcbf3-394f-4350-94df-3eed8ff4d2fc',
  active: true
}


// Callback
client.addUser(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.addUser(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.addUser(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

#### Alter User

- `role (optional)` - id of the role you wish to assign to the user. See add_role for more detail.
- `username (required)` - username assigned to the user. It can not be altered after adding the user. It serves as the hash.
- `password (optional)` - clear text for password. HarperDB will encrypt the password upon reciept. 

```javascript
// update role, password or status of a user

const options = {
  username: 'junior_support',
  password: 'junior@org',
}


// Callback
client.alterUser(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.alterUser(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.alterUser(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

#### Drop User

- `username (required)` - username assigned to the user. 

```javascript
// delete a user
const options = {
  username: 'junior_support',
}

// Callback
client.dropUser(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.dropUser(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.dropUser(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

#### List Users

```javascript
// list all user

// Callback
client.listUsers((err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.listUsers()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.listUsers()
  console.log(res);
} catch(err) {
  console.log(err);
}
```

#### User Info

```javascript
// get the details of current user used for creating client

// Callback
client.userInfo((err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.userInfo()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.userInfo()
  console.log(res);
} catch(err) {
  console.log(err);
}
```

### Utilities

#### Delete all records of a table before a given date

- `date (required)` - records older than this date will be deleted
- `schema (required)` - name of the schema where you are deleting your data
- `table (required)` - name of the table where you are deleting your data

```javascript
const options = {
  schema: 'cars',
  table: 'tech_crunch_funding',
  date: '2020-05-31',
};

// Callback
client.deleteFilesBefore(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.deleteFilesBefore(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.deleteFilesBefore(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
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

#### Get system Information

```javascript
// Callback
client.systemInformation((err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.systemInformation()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.systemInformation()
  console.log(res);
} catch(err) {
  console.log(err);
}
```

#### Get job details for a given jod id

- `jobId (required)` : job id of the job you wish to view

```javascript
const options = {
  jobId: 'f13d813f-64d9-44d8-9a39-7135136c7b92'
};

// Callback
client.getJobDetails(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.getJobDetails(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.getJobDetails(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

#### Get all jobs between dates

- `from (required)` - the date you wish to start the search
- `until (required)` - the date you wish to end the search

```javascript
const options = {
  from: "2020-05-31",
  until: "2020-06-02",
};

// Callback
client.getJobsByDate(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.getJobsByDate(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.getJobsByDate(options)
  console.log(res);
} catch(err) {
  console.log(err);
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

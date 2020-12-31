# User Operations

***Operation is restricted to super_user roles only***

## Add User

- `role(required)` - role id for which you want to create user.
- `username (required)` - username assigned to the user. It can not be altered after adding the user. It serves as the hash.
- `password (required)` - clear text for password. HarperDB will encrypt the password upon reciept. 
- `active (required)` - boolean value for status of user's access to your HarperDB instance. If set to false, user will not be able to access your instance of HarperDB.

```javascript
// add new user for a given role

const options = {
  role: '13fbcbf3-394f-4350-94df-3eed8ff4d2fc',
  username: 'junior_support',
  password: 'org@123',
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

## Alter User

- `username (required)` - username assigned to the user. It can not be altered after adding the user. It serves as the hash.
- `role (optional)` - id of the role you wish to assign to the user. See add_role for more detail.
- `password (optional)` - clear text for password. HarperDB will encrypt the password upon reciept. 
- `active (optional)` - boolean value for status of user's access to your HarperDB instance. If set to false, user will not be able to access your instance of HarperDB.


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

## Drop User

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

## List Users

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

## User Info

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

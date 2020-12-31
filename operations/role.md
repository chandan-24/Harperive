# Role Operations

HarperDB utilizes a Role-Based Access Control (RBAC) framework to manage access to HarperDB instances.  A user is assigned a role that determines the user's permissions to access database resources and run core operations. _Follow the [link](https://harperdb.io/developers/documentation/security/users-roles/) for more information on roles_

## Add Role

- `roleName (required)` - name of your role
- `permission (required)` - follow below syntax to define a permission

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

## Alter Role

- `roleId (required)` - the id value for the role you are altering
- `roleName (optional)` - name value to update on the role you are altering
- `permission (required)` - object defining permissions for users associated with this role

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

## Drop Role

- `roleId (required)` - role id of the role you wish to delete

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

## List Roles

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

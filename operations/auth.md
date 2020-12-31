# Token Authentication

Read more about HarperDB's token authorization [here](https://harperdb.io/developers/documentation/security/jwt-authentication/).

## Create Authentication Tokens

This operation creates the tokens needed to authentication operation & refresh token requests. Note, this operation does not require authorization to be set.

- `username (required)` - username of user to generate tokens for
- `password (required)` - password of user to generate tokens for

```javascript
// creates operation and refresh tokens

const options = {
  username: 'username',
  password: 'password',
}

// Callback
client.createAuthenticationTokens(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.createAuthenticationTokens(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.createAuthenticationTokens(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

## Refresh Operation Token

This operation creates an operation token. It needs refresh token to authenticate request.

- `token (required)` - refresh token for authentication

```javascript
// creates operation and refresh tokens

const options = {
  token: 'token',
}

// Callback
client.refreshOperationToken(options, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
});

// Promise
client.refreshOperationToken(options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Async/await
try {
  const res = await client.refreshOperationToken(options)
  console.log(res);
} catch(err) {
  console.log(err);
}
```

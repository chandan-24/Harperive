# Release Notes

## v2.0.0 - latest

*31/12/2020*

### Features/Updates

- All operations promisified, each operation works with callback and also returns promise if called as async/await or promises
- JWT token can be used to authenticate all operation in place of standard Basic auth.
- New Operations supported
    - Upsert
    - Create attribute
    - Import from s3
    - Export to s3
    - Read HarperDB Log
    - Read Transaction Log
    - Read Transaction Log By *timestamp*
    - Read Transaction Log By *username*
    - Read Transaction Log By *hash_value*
    - Delete Transaction Log Before
    - Create Authentication Tokens
    - Refresh Operation Token
- Custom operation execution, pass you request body with operation you wish to execute to **executeOperation()** method.
- Improved documentation

## v1.0.2

*23/08/2020*

- Improved docs

## v1.0.1

*21/06/2020*

- Improved docs

## v1.0.0

*02/06/2020*

- Intial release
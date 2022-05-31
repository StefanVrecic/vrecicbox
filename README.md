# vrecicbox

Spent 2 hours on this, ran out of time

shortcuts / time limitations:
-> didn't implement db or filtering yet.
-> testing not set up
-> tests in package json hardcoded to 1 file instead of all directories
-> Didn't use env for API key, just hardcoded
-> Didn't use TypeScript
-> Paid little attention to tidying directories etc.


## Run:
```
npm i
cd src
node app.js
```

Set up your API key in K.js

Use this data in postman to test
```
POST
http://localhost:8080/register

{
    "firstName": "My first name",
    "lastName": "My last name",
    "email": "myemail@gmail.com",
    "username": "My username"
}
```


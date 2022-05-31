# vrecicbox

shortcuts / time limitations:
-> didn't implement db or filtering yet.
-> only 1 test done
-> Didn't use env for API key, just hardcoded
-> Didn't use TypeScript


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


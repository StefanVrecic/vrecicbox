const express = require("express");
const app = express();

const hostname = "localhost"; // use envs here and for port instead of hardcoding...
const port = 8080;
const { User } = require('./User');


const { sendWelcome } = require('./SendEmail.js');
const Keyv = require('keyv');

const keyv = new Keyv();
keyv.on('error', err => console.log('Connection Error', err));



app.use(express.json());

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


app.get('/', async function (req,res) {
    console.log("hi");
    
});
// could also be exported into seperate file in .ts
app.post('/register', async function (req, res) {
console.log(v);
    if (!req.body || !req.body.firstName || !req.body.lastName || !req.body.email || !req.body.username) {
        return res.status(400).send({ error: "Missing one or more of: firstName, lastName, email, username" });
    }
    const newUser = new User(req.body.firstName, req.body.lastName, req.body.email, req.body.username);
    sendWelcome(newUser);
    await keyv.set(newUser.username, newUser); 
    // add to database here....
    return res.status(200).send();
  });

  // filtering logic not yet set
  app.get('/emails-sent', async function (req, res) {
    const filter = req.body.filter || null;
    const listEmails = keyv.get(filter, sorting, page);
    if (filterType != null) {

    } 
  });

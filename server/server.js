const express = require('express');
const app = express();
const port = 5000;
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const cors = require('cors');

app.use(cors());
app.options("*",cors()) // Use cors middleware to enable CORS

app.use((req, res, next) => {
  console.log('Demo middleware executing...');
  next();
});

const users = [
  {
    username: 'userOne',
    password: 'passwordOne'
  },  
  {
    username: 'userTwo',
    password: 'passwordTwo'
  }
  // ... (your user data)
];

passport.use(new BasicStrategy(
  function(username, password, done) {
    console.log('username', username);
    console.log('password', password);
  }
));

app.get('/api', (req, res) => {
  res.send('Hello world');
});

app.get('/my-protected-resource', passport.authenticate('basic', { session: false }), (req, res) => {
  console.log('protected resource accessed');
  res.send('Hello protected world');
});


app.listen(port, () => {
  console.log('Server started on port 5000');
});

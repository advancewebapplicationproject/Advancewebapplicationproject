const express = require('express');
const app = express();
const port = 5005;
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(cors());
app.options("*", cors()); // Use cors middleware to enable CORS

app.use((req, res, next) => {
  console.log('Demo middleware executing...');
  next();
});

const users = [
  {
    username: 'userOne',
    password: 'passwordOne',
  },
  {
    username: 'userTwo',
    password: 'passwordTwo',
  },
  // ... (your user data)
];

passport.use(
  new BasicStrategy((username, password, done) => {
    console.log('username', username);
    console.log('password', password);

    // Here, you should perform authentication logic
    const user = users.find((user) => user.username === username && user.password === password);

    if (!user) {
      return done(null, false, { message: 'Incorrect username or password' });
    }

    return done(null, user);
  })
);

app.get('/my-protected-resource', (req, res) => {
  res.send('Hello world');
});

app.get('/protected-resource', passport.authenticate('basic', { session: false }), (req, res) => {
  console.log('protected resource accessed');
  res.send('Hello protected world');
});

app.get('/some-other-protected-resource', passport.authenticate('basic', { session: false }), function(req, res)  {
  res.send('Other protected resource accessed');
  
});

app.post('jwtlogin',passport.authenticate('basic', { session: false }), (req, res) => {
  //check username and password

  //generate JWT

  //send  JWT as a response
  
});
app.get('/jwt-protected-resource',  (req, res) => {
});




app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
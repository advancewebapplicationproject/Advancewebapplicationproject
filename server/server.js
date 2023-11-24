const express = require('express');
const app = express();
const port = 5005;
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
        ExtractJwt = require('passport-jwt').ExtractJwt;
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

const jwtoptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : "MyVerySecretSigningKey"
};

passport.use(new JwtStrategy(jwtoptions, function(jwt_payload, done) {
  console.log("JWT is valid");
  console.log("payload is as follows");
  console.log(jwt_payload);

  done(null, jwt_payload);

}));

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
//check username and password
app.post('/jwtLogin',passport.authenticate('basic', { session: false }), (req, res) => {
//generate JWT
  const payload = {
    foo : {
      bar: true
    }
  };
  const secretKey = "MyVerySecretSigningKey";
  const options = {
    expiresIn: '1d'
  };
  const generatedJWT = jwt.sign(payload, secretKey, options)
//send  JWT as a response
res.json({jwt: generatedJWT}
  );
  
});
app.get('/jwt-protected-resource', passport.authenticate('jwt', { session: false }),  (req, res) => {
  res.send('ok');
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

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
  console.log('Request URL:', req); 
  next();
});


const users = [
  {
    id: 1,
    username: 'userOne',
    password: 'passwordOne',
  },
  {
    id: 2,
    username: 'userTwo',
    password: 'passwordTwo',
  },
  // ... (your user data)
];

passport.use(
  new BasicStrategy((username, password, done) => {
    console.log('username: '+ username);
    console.log('password: '+ password);

    const user = users.find(u => u.username === username);

    if (user !=null) {
      if (user.password === password) {
        done(null, user);
      } else {
        done(null, false);
      }
    }
      else {
        done(null, false);
      }
    }));

    

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
    user : req.user.id,
    username : req.user.username
  };
  const secretKey = "MyVerySecretSigningKey";
  const options = {
    expiresIn: '2d'
  };
  const generatedJWT = jwt.sign(payload, secretKey, options)
//send  JWT as a response
res.json({jwt: generatedJWT}
  );
  
});
app.get('/jwt-protected-resource', passport.authenticate('jwt', { session: false }),  (req, res) => {
  //console.log(req.user);

  console.log('user id from jwt is ' + req.user.user);
  res.send('ok, for user ' + req.user.username);
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

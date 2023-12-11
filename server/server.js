const express = require("express");
const app = express();
const port = 5005;
const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const JwtStrategy = require("passport-jwt").Strategy;
ExtractJwt = require("passport-jwt").ExtractJwt;
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");

app.use(bodyParser.json());
const secretKey = "MyVerySecretSigningKey";

app.use(cors());
app.options("*", cors()); // Use cors middleware to enable CORS

app.use((req, res, next) => {
  console.log("Demo middleware executing...");
  console.log("Request URL:", req);
  next();
});

const users = [
  {
    id: uuidv4(),
    username: "userOne",
    password: "passwordOne",
  },
  {
    id: uuidv4(),
    username: "userTwo",
    password: "passwordTwo",
  },
  // ... (your user data)
];

passport.use(
  new BasicStrategy((username, password, done) => {
    console.log("username: " + username);
    console.log("password: " + password);

    const user = users.find((u) => u.username === username);

    if (user != null) {
      if (bcrypt.compareSync(password, user.password)) {
        done(null, user);
      } else {
        done(null, false);
      }
    } else {
      done(null, false);
    }
  })
);

const jwtoptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "MyVerySecretSigningKey",
};

passport.use(
  new JwtStrategy(jwtoptions, function (jwt_payload, done) {
    console.log("JWT is valid");
    console.log("payload is as follows");
    console.log(jwt_payload);

    done(null, jwt_payload);
  })
);

app.get("/my-protected-resource", (req, res) => {
  res.send("Hello world");
});

/*
REQUEST BODY
{
  "username": "userOne",
  "password": "passwordOne",
  "email": "userone@bar.com"
}


*/
app.get("/packages", (req, res) => {
  res.json([
    {
      sender_name: "John Doe",
      sender_address: "Nepal",
      sender_email: "123@gmail.com",
      sender_contact: "123456789",
      item_name: "Laptop",
      item_weight: "2kg",
      receiver_name: "John Doe",
      receiver_address: "Nepal",
      receiver_email: "321@gmail.com",
      receiver_contact: "987654321",
    },
    {
      sender_name: "John bow",
      sender_address: "Rupakot",
      sender_email: "12345@gmail.com",
      sender_contact: "12345678",
      item_name: "Laptop 2",
      item_weight: "5kg",
      receiver_name: "John_Doe",
      receiver_address: "Gulmi",
      receiver_email: "3210@gmail.com",
      receiver_contact: "9876543210",
    },
  ]);
});

app.post("/registerBasic", (req, res) => {
  if ("username" in req.body === false) {
    res.status(400);
    res.json({ status: "username is missing" });
    return;
  }
  if ("password" in req.body === false) {
    res.status(400);
    res.json({ status: "password is missing" });
    return;
  }
  if ("email" in req.body === false) {
    res.status(400);
    res.json({ status: "email is missing" });
    return;
  }

  //create password hash
  const salt = bcrypt.genSaltSync(6);
  const passwordHash = bcrypt.hashSync(req.body.password, salt);
  console.log(passwordHash);

  res.status(201).json({ status: "Created" });

  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    password: passwordHash,
    email: req.body.email,
  };
  users.push(newUser);
  console.log(users);

  res.send("ok");
});

app.get(
  "/protected-resource",
  passport.authenticate("basic", { session: false }),
  (req, res) => {
    console.log("protected resource accessed");
    res.send("Hello protected world");
  }
);

app.get(
  "/some-other-protected-resource",
  passport.authenticate("basic", { session: false }),
  function (req, res) {
    res.send("Other protected resource accessed");
  }
);
//check username and password
app.post("/JWTLogin", (req, res, next) => {
  const { username, password } = req.body;

  passport.authenticate("basic", { session: false }, (err, user, info) => {
    console.log("Error:", err);
    console.log("User:", user);
    console.log("Info:", info);
    if (err || !user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }

      const body = {
        id: user.id,
        username: user.username,
      };

      // generate JWT
      const payload = {
        user: body,
      };

      const options = {
        expiresIn: "10d",
      };
      const token = jwt.sign(payload, secretKey, options);

      // send JWT as a response
      return res.json({ token });
    });
  })(req, res, next);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

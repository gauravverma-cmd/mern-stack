import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
const app = express();

app.use(session({
    // This is a session, its also a middle-ware
    secret: "mySecret", // This should be hard to gusse
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // This is a cookie for a day
    },
  }),
);

app.use(cookieParser("aliceCodeSecret")); // Here we are using the cookie

const PORT = 8888;

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  res.send("Hello from server");
});

app.get("/login", (req, res) => {
  // This is  how to create a session
  req.session.user = {
    name: "Alan",
    email: "alanmelbom123@email.com",
    age: 23,
  };
  res.send(`${req.session.user.name} is login`);
});

app.get("/logout", (req, res) => { 
    // This is how to delete a session
  const userName = req.session.user ? req.session.user.name : "User";
  req.session.destroy(); 
  res.send(`${userName} is logout`); 
});

app.listen(PORT, () => console.log("Server start at :", PORT));

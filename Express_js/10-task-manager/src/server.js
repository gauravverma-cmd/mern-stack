import express from "express";
import session from "express-session";
import authRoute from "./routes/auth.route.js";
import cookieParser from 'cookie-parser'
import taskRoute from "./routes/task.route.js"

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cookieParser())
app.use(session({
    secret: "somethingspecialforthis",
    saveUninitialized: false,
    resave: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);
app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager....");
});
app.use("/auth", authRoute);
app.use('/task', taskRoute)

app.listen(PORT, () => console.log(`Server start at : ${PORT}`));

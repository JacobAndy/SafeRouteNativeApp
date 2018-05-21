require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const app = express();
const massive = require("massive");
const port = 3001;

const { createUser, userSignIn } = require("./controllers/userController");

massive(process.env.DATABASE_KEY)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(`DATABASE KEY SET ERROR => ${err}`));

app.use(cors());
app.use(json());

app.get("/api/user/signin", userSignIn);

app.post("/api/user/created", createUser);

app.listen(port, () => {
  console.log(`Listening on port => ${port}`);
});

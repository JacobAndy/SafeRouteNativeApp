const bcrypt = require("bcrypt");
const saltRound = 10;

const createUser = (req, res) => {
  let {
    userName,
    email,
    firstName,
    lastName,
    phoneNumber,
    password
  } = req.body;
  //   bcrypt.hashSync(password,saltRound);
  req.app
    .get("db")
    .createUser([
      userName,
      email,
      firstName,
      lastName,
      phoneNumber,
      bcrypt.hashSync(password, saltRound)
    ])
    .then(results => console.log(`SUCCESS IN CREATING USER : => ${results}`))
    .catch(err => console.log(`ERROR IN CREATING USER :=>${err}`));
};
const userSignIn = (req, res) => {
  let { user, pass } = req.query;
  console.log(user, pass);
  //hash is the password stored in the database
  //   bcrypt.compareSync(pass,hash)
  req.app
    .get("db")
    .userSignIn(user)
    .then(results => {
      if (bcrypt.compareSync(pass, results[0].user_password)) {
        delete results[0].user_password;
        res.status(200).json(results[0]);
      } else {
        res.status(401).json({ message: "unauthorized access" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(`ERROR IN USER SIGN IN :=> ${err}`);
    });
};

module.exports = {
  createUser,
  userSignIn
};

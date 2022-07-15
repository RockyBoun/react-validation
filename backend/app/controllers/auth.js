const Auth = require("mongoose").model("auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./../configs");
exports.signup = (req, res) => {
  newauth = new Auth(req.body);
  Auth.findOne({ email: newauth.email })
    .then((result) => {
      if (result) {
        res.status(400).json({ message: "This file is expanded" });
      } else {
        newauth.password = bcrypt.hashSync(req.body.password, 8);
        newauth.save().then((response) => {
          if (response) res.status(200).json({ message: "Successfully" });
        });
      }
    })
    .catch((err) => {
      err.status(500).json({ message: "Error" });
    });
};

exports.login = (req, res) => {
  Auth.findOne({ email: req.body.email })
    .then((result) => {
      if (result && bcrypt.compareSync(req.body.password, result.password)) {
        const token = jwt.sign({ result }, config.jwt.secretOrPrivateKey, {
          expiresIn: "1h",
        });
        res.status(200).json({
          message: "Successfully",
          doc: { auth: result, token: "Bearer" + token },
        });
      } else {
        res.status(400).json({ message: "Input the password correctly" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to connet server" });
    });
};

exports.loginwithtoken = async (req, res) => {
  const user = req.user;
  const token = await jwt.sign({ user }, config.jwt.secretOrPrivateKey, {
    expiresIn: "100h",
  });

  res.status(200).json({
    message: "login success again!",
    doc: { auth: user, token: `Bearer ` + token },
  });
};

const { check } = require("express-validator");

exports.signin = [
  check("email", "Your email is not valid").not().isEmpty(),
  check("password", "Your password must be at least 5 characters")
    .not()
    .isEmpty(),
];

exports.signup = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name must have more than 5 characters"),
  check("email", "Your email is not valid").not().isEmpty(),
  check("password", "Your password must be at least 5 characters")
    .not()
    .isEmpty(),
];

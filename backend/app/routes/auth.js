const express = require("express");
const router = express.Router();
const ctrAuth = require("./../controllers/Auth");
router.post("/signup", ctrAuth.signup);
router.post("/login", ctrAuth.login);
module.exports = router;

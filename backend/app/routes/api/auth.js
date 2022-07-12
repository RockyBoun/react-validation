const authController = require("../../controllers/auth");
const authValidator = require("../../validators/auth");
const router = require("express").Router();

// router.post("/signin", authValidator.signin, authController.signin);
router.post("/signup", authValidator.signup, authController.signup);
// router.post("/verify", authController.verify);

module.exports = router;

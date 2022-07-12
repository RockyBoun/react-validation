const router = require("express").Router();
const authRouter = require("./api/auth");

router.use("/auth", authRouter);

router.use("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

module.exports = router;

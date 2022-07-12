const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

module.exports = function () {
  const app = express();

  app.use(cookieParser());
  app.use(express.json());
  app.use(morgan("test"));
  app.use(
    express.urlencoded({
      extended: true,
      limit: "100kb",
      parameterLimit: "100",
    })
  );

  require("../routes")(app);

  app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).json({
      message: "",
    });
  });

  return app;
};

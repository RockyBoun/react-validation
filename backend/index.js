const config = require("./app/config");
const http = require("http");
const mongoose = require("./app/libs/mongoose");
const express = require("./app/libs/express");

mongoose.connect().then((success) => {
  if (!success) return false;

  const app = express();

  const httpServer = http.createServer(app).listen(config.SERVER.PORT, () => {
    console.info(`Http Server is running at port ${config.SERVER.PORT}`);
  });
});

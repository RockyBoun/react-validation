const config = require("./../configs/db");
const mongoose = require("mongoose");

module.exports = () => {
  // mongoose.set("useNewUrlParser", true);
  // mongoose.set("debug", config.isDev ? true : false);
  // mongoose.set("useCreateIndex", true);
  // mongoose.set("useFindAndModify", true);
  // mongoose.set("bufferCommands", config.isDev ? true : false);
  require("./../models/authModel");
  return mongoose.connect(config.mongoURL, {
    autoIndex: true,
  });
};

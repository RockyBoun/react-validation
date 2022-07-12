const config = require("../config/db");
const mongoose = require("mongoose");

module.exports = {
  connect: function () {
    return mongoose
      .connect(config.mongoURL, { useNewUrlParser: true })
      .then((connection) => {
        console.log("Connect successfully to MongoDB Server");
        return true;
      })
      .catch((errors) => {
        console.log("Error : ");
        console.log(errors);
        return false;
      });
  },
};

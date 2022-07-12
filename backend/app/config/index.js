const isDev = process.env.NODE_ENV == "development";
const cfgServer = require("./server");
module.exports = {
  SERVER: cfgServer,
  jwt: {
    ACCESS_TOKEN_KEY: "JWT_ACCESS_TOKEN_SECRET_KEY",
    REFRESH_TOKEN_SECRET_KEY: "JWT_REFRESH_TOKEN_SECRET_KEY",
  },
};

const config = require("../config");
const User = require("./../models/User");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

// const generateAccessToken = (payload) => {
//   return jwt.sign({ ...payload }, config.jwt.ACCESS_TOKEN_KEY, {
//     expiresIn: "30s",
//   });
// };

// exports.signin = async (req, res, next) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     return res.status(422).jsonp(errors.array());
//   } else {
//     User.findOne({ email: req.body.email }, (err, doc) => {
//       if (err) return next(err);
//       if (!doc) {
//         return res.status(400).json({
//           message: "Unregistered User",
//         });
//       }
//       if (doc.checkPassword(req.body.password)) {
//         let payload = {
//           id: doc._id,
//           username: doc.name,
//         };
//         const access_token = generateAccessToken(payload);
//         const refresh_token = jwt.sign(payload, config.jwt.REFRESH_TOKEN_KEY, {
//           expiresIn: "1y",
//         });
//         res.cookie("access_token", access_token, {
//           secure: true,
//           httpOnly: true,
//           sameSite: "none",
//         });
//         res.cookie("refresh_token", refresh_token, {
//           secure: true,
//           httpOnly: true,
//           sameSite: "none",
//         });
//         res.status(200).json({
//           id: doc._id,
//           username: doc.name,
//           message: "Sign In was successfully.",
//         });
//       } else {
//         res.status(400).json({
//           message: "Password is incorrect",
//         });
//       }
//     });
//   }
// };

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(req.body);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const user = new User({ ...req.body });
    user.save((err, doc) => {
      if (err) {
        return res.status(400).json({
          message: "Duplicated Email Address",
        });
      }
      res.status(201).json({
        message: "User was registered successfully",
      });
    });
  }
};

// exports.signout = (req, res, next) => {
//   res
//     .cookie("refresh_token", "", {
//       secure: true,
//       httpOnly: true,
//     })
//     .json({
//       redirect: "/signin",
//     });
// };

// exports.verify = (req, res, next) => {
//   try {
//     const { access_token, refresh_token } = req.cookies;
//     if (!refresh_token) {
//       return res.status(404).json({ error: "You are not authorized!" });
//     }
//     jwt.verify(refresh_token, config.jwt.REFRESH_TOKEN_KEY, (err, decoded) => {
//       if (err && err.name === "JsonWebTokenError") {
//         return res.status(404).json({ error: "Token Error!" });
//       }
//       if (err && err.name === "TokenExpiredError") {
//         return res.status(404).json({ error: "Login again!" });
//       }
//       const { username, id } = decoded;
//       if (access_token) {
//         jwt.verify(access_token, config.jwt.ACCESS_TOKEN_KEY, (err, access) => {
//           if (err && err.name === "JsonWebTokenError")
//             return res.status(404).json({ error: "Token Tampered!" });
//           if (err && err.name === "TokenExpiredError") {
//             const access_token = generateAccessToken({ username, id });
//             return res
//               .cookie("access_token", access_token, {
//                 secure: true,
//                 httpOnly: true,
//                 sameSite: "None",
//               })
//               .json({ username, id });
//           }
//           return res
//             .cookie("access_token", access_token, {
//               secure: true,
//               httpOnly: true,
//               sameSite: "None",
//             })
//             .json({ username, id });
//         });
//       }
//       if (!access_token) {
//         const access_token = generateAccessToken({ username });
//         return res
//           .cookie("access_token", access_token, {
//             secure: true,
//             httpOnly: true,
//             sameSite: "None",
//           })
//           .json({ username, id });
//       }
//     });
//   } catch (error) {
//     res.status(404).json({ error: "NO TOKEN!" });
//   }
// };

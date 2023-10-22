const express = require("express");

const router = express.Router();

const {
  loginUser,
  authenticateUser,
} = require("../controller/auth-controller");

router.route("/login").post(loginUser);

router.route("/authenticate").post(authenticateUser);

module.exports = router;

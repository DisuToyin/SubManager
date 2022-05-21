const express = require("express");
const router = express.Router();
const User = require("../controllers/users_controllers");

const { login, register } = User;

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
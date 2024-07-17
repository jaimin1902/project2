const express = require("express");
const authController = require("../controllers/auth-controllers");
const router = express.Router();


router.route("/").get(authController.home);

router.route("/register").get(authController.register);

module.exports = router;
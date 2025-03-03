const express = require("express");
const authController = require("../controllers/auth-controllers");
const router = express.Router();


router.route("/").get(authController.home);

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

module.exports = router;
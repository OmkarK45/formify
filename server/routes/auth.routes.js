const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth.middleware");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  user,
  logout,
} = require("../controllers/auth.controller");

// @route - /api/auth/->
router.route("/user").get(protect, user);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(protect, logout);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetPassword);

module.exports = router;

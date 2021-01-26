const User = require("../models/User.model");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new ErrorResponse("Please provide and email and password", 400)
    );
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(
        new ErrorResponse("Incorrect Credentials. Please try again.", 404)
      );
    }
    const isMatched = await user.matchPasswords(password);
    if (!isMatched) {
      return next(
        new ErrorResponse("Incorrect Credentials. Please try again.", 401)
      );
    }
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = User.findOne({ email });
    if (!user) {
      return next(new ErrorResponse("Email could not be sent.", 404));
    }
    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetURL = `http://localhost:3000/passwordreset/${resetToken}`;
    const message = `<h1>You have requested a password reset</h1>
    <p>Please go to this link to reset your password : </p>
    <a href=${resetURL} clicktracking=off>${resetURL}</a>`;

    try {
    } catch (error) {}
  } catch (error) {}
};

exports.resetPassword = (req, res, next) => {
  res.send("Reset password Route");
};

const sendToken = async (user, statusCode, res) => {
  const token = await user.getSignedToken();
  res
    .status(statusCode)
    // @DATA - Send user data after loggin in to store in context 
    .json({ success: true, token: token, userID: user._id });
};

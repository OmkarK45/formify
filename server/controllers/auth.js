const User = require("../models/User.model")
const ErrorResponse = require("../utils/errorResponse")
const sendEmail = require("../utils/sendEmail")
const { message } = require("../utils/resetPasswordTemplate")
const crypto = require("crypto")

exports.user = async (req, res, next) => {
  const { email } = req.user
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return next(new ErrorResponse("Invalid Credentials.", 404))
    }
    sendToken(user, 200, res)
  } catch (error) {
    return next(new ErrorResponse("Something went wrong", 500))
  }
}

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body
  try {
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
    })
    sendToken(user, 200, res)
  } catch (error) {
    next(error)
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return next(new ErrorResponse("Please provide and email and password", 400))
  }
  try {
    const user = await User.findOne({ email }).select("+password")
    if (!user) {
      return next(
        new ErrorResponse("Incorrect Credentials. Please try again.", 404)
      )
    }
    const isMatched = await user.matchPasswords(password)
    if (!isMatched) {
      return next(
        new ErrorResponse("Incorrect Credentials. Please try again.", 401)
      )
    }
    sendToken(user, 201, res)
  } catch (error) {
    next(error)
  }
}

exports.logout = async (req, res, next) => {
  try {
    res.cookie("token", "", { httpOnly: true })
    res.json({
      message: "Logged out successfully.",
    })
  } catch (error) {
    next(error)
  }
}

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return next(new ErrorResponse("Email could not be sent.", 404))
    }
    const resetToken = await user.getResetPasswordToken()
    await user.save()

    const resetURL = `http://localhost:3000/auth/resetpassword/${resetToken}`
    const html = message(resetURL)

    try {
      await sendEmail({
        to: user.email,
        subject: "[Formify] : Password Reset Request",
        text: html,
      })
      res.status(200).json({
        success: true,
        msg: "Email has been sent to you.",
      })
    } catch (error) {
      user.resetToken = undefined
      await user.save()
      return next(new ErrorResponse("Email could not be sent.", 500))
    }
  } catch (error) {
    next(error)
  }
}

exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex")

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: {
        $gt: Date.now(),
      },
    })

    if (!user) {
      return next(new ErrorResponse("Invalid Reset Token", 400))
    }
    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()
    res.status(200).json({
      msg: "Password Reset Successfully.",
      success: true,
    })
  } catch (error) {
    next(new ErrorResponse(error, 500))
  }
}

const sendToken = async (user, statusCode, res) => {
  const token = await user.getSignedToken()
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 3600 * 1000,
  })
  res
    .status(statusCode)
    // @DATA - Send user data after loggin in to store in context
    .json({
      success: true,
      userID: user._id,
      username: user.username,
      email: user.email,
    })
}

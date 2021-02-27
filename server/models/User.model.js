const mongoose = require("mongoose")
const Form = require("./Form.model")
const Schema = mongoose.Schema
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new Schema({
  // @TODO -> This needs some strict checking
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
    trim: true,
    minlength: 3,
    trim: true,
    match: [
      /^[a-zA-Z0-9._]+$/,
      "Username must be valid. Only (.) and underscore (_) are allowed",
    ],
  },
  email: {
    type: String,
    required: [true, "Please provide an email."],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valied email address.",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    maxlength: 256,
    select: false,
    trim: true,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  forms: [{ type: Schema.Types.ObjectId, ref: "Form" }],
  verificationToken: {
    type: String,
  },
  verificationTokenExpiresIn: {
    type: Date,
  },
})

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.getEmailVerifcationToken = async function () {
  const verificationToken = await crypto.randomBytes(16).toString("hex")
  this.verificationToken = verificationToken
  this.verificationTokenExpiresIn = Date.now() + 60 * 60 * 24 * 1000
  return verificationToken
}

userSchema.methods.getSignedToken = async function () {
  return await jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  )
}

userSchema.methods.getResetPasswordToken = async function () {
  console.log("Im called")
  const resetToken = crypto.randomBytes(20).toString("hex")
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000)
  return resetToken
}

const User = mongoose.model("User", userSchema)
module.exports = User

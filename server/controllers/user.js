const User = require("../models/User.model")
const ErrorResponse = require("../utils/errorResponse")

exports.updateEmail = async (req, res, next) => {
  const { oldEmail, newEmail } = req.body
  try {
    const user = await User.findOne({ email: oldEmail })
    if (!user) {
      return next(new ErrorResponse("No user with that email."))
    }
    const alreadyExists = await User.findOne({ email: newEmail })
    if (alreadyExists) {
      return next(new ErrorResponse("User already exists with that email."))
    }
    const updatedUser = await User.findOneAndUpdate(
      { email: oldEmail },
      {
        $set: {
          email: newEmail,
        },
      }
    )
    await updatedUser.save()

    res.json({
      updatedUser,
      success: true,
      msg: "User Email updated",
    })
  } catch (error) {
    return next(new ErrorResponse(error, 500))
  }
}

exports.updatePassword = async () => {}

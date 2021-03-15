// This is abstracted in seprate middleware
exports.captchaVerification = async (req, res, next) => {
  const gCaptchaResponse = req.body["g-recaptcha-response"]

  if (!gCaptchaResponse) {
    return next(new ErrorResponse("Please complete captcha challenge", 400))
  }

  const secretKey = process.env.CAPTCHA_KEY

  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${gCaptchaResponse}`

  const responseBody = await fetch(verificationURL)
    .then((res) => res.json())
    .catch((err) => console.log(err))

  const verificationStatus = responseBody.success

  if (!responseBody.success) {
    return next(
      new ErrorResponse("Captcha challenge failed. Please try again.", 400)
    )
  }
  req.verificationStatus = verificationStatus
  next()
}

const Recaptcha = require("express-recaptcha").RecaptchaV2

const recaptcha = new Recaptcha(
  process.env.CAPTCHA_SITE_KEY,
  process.env.CAPTCHA_SECRET_KEY
)

module.exports = recaptcha

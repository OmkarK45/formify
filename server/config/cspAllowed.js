const helmetOptions = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [
        "'self'",
        "https://www.google.com",
        "https://www.google.com/recaptcha/api.js",
        "https://www.gstatic.com/recaptcha/",
        "https://www.gstatic.com/recaptcha/ ",
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
        "https://fonts.googleapis.com",
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "unpkg.com",
        "cdn.jsdelivr.net",
        "fonts.googleapis.com",
      ],
      fontSrc: ["'self'", "fonts.googleapis.com", "fonts.gstatic.com"],
    },
  },
}
module.exports = helmetOptions

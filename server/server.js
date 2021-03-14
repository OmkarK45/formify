require("dotenv").config({ path: "./config.env" })
const helmetOptions = require("./config/cspAllowed")
const express = require("express")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const connectDB = require("./config/db")
const bodyParser = require("body-parser")
const errorHandler = require("./middleware/errorMiddleware")
const cors = require("cors")
const corsOptions = require("./utils/corsOptions")
const app = express()
connectDB()

const PORT = process.env.PORT || 5000

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))
app.set("views", __dirname + "/views")
app.use(cookieParser())
// move this to seperate file
app.use(helmet(helmetOptions))
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api/user/", require("./routes/user.routes"))
app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/dashboard", require("./routes/dashboard.routes"))
app.use("/api/forms/", require("./routes/form.routes"))
app.use(errorHandler)

const server = app.listen(PORT, () => {
  console.log(`Server [${PORT}] : Started`)
})
app.get("/", (req, res) => {
  res.render("backendhome")
})
app.get("/thankyou", (req, res) => {
  res.render("endpage", {
    success: true,
    heading: "Thank you!",
    message: "We received your submission",
  })
})

// Testing purpose
app.get("/verification", (req, res) => {
  res.render("verificationPage", {
    heading: "Almost complete",
    message:
      "The owner of this form requires you to complete captcha verification before you can submit form",
  })
})

app.use((req, res, next) => {
  res.status(404).json({
    msg: "Requested resource was not found on this server",
    status: 404,
  })
  next()
})
process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error : ${error} ErrorStack : ${error.stack}`)
  server.close(() => process.exit(1))
})

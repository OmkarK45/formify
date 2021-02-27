require("dotenv").config({ path: "./config.env" })
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
app.use(helmet())
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
  res.render("submitted")
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

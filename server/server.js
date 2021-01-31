require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/error.middleware");
const cors = require("cors");
const corsOptions = require("./utils/corsOptions");
const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/dashboard", require("./routes/dashboard.routes"));
app.use("/api/forms/", require("./routes/form.routes"));
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server [${PORT}] : Started`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error : ${error}`);
  server.close(() => process.exit(1));
});

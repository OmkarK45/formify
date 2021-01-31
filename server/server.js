require("dotenv").config({ path: "./config.env" });
const express = require("express");
const helmet = require("helmet");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/error.middleware");
const cors = require("cors");
const corsOptions = require("./utils/corsOptions");
const app = express();
connectDB();

const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/dashboard", require("./routes/dashboard.routes"));
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server [${PORT}] : Started`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error : ${error}`);
  server.close(() => process.exit(1));
});

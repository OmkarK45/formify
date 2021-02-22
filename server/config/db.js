const mongoose = require("mongoose")
const connectDB = async () => {
  await mongoose.connect(process.env.DB_URI_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  console.log("MongoDB : Connected")
}

module.exports = connectDB

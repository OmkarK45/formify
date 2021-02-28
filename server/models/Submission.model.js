const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Form = require("./Form.model")

const submissionSchema = new Schema(
  {
    belongTo: {
      type: Schema.Types.ObjectId,
      ref: "Form",
    },
    submissions: {
      type: Schema.Types.Mixed,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { strict: false }
)
const Submission = mongoose.model("Submission", submissionSchema)

module.exports = Submission

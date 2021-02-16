const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { nanoid } = require("nanoid")

const formSchema = new Schema(
  {
    //   @TODO -> add form submission and other info
    formID: {
      type: String,
      default: () => nanoid(6),
    },
    schema: {
      type: Array,
      // default: this.submissions.slice(1)
    },
    submissions: [{ type: Schema.Types.Mixed }],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { strict: false, timestamps: true }
)

const Form = mongoose.model("Form", formSchema)
module.exports = Form

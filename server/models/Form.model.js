const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { nanoid } = require("nanoid")

/*
  Each Form has a FormID, A fields Array which handles schema of the form
  submission -> array of objects which handle submissions at this form
  createdBy -> The refers to the user who created the form
  host -> We make sure that only one email provided is able to make post requests to this form
*/
const formSchema = new Schema(
  {
    //   @TODO -> add form submission and other info
    formID: {
      type: String,
      default: () => nanoid(6),
    },
    fields: [
      { type: String, length: 3, required: [true, "This field is required"] },
    ],
    submissions: [{ type: Schema.Types.Mixed }],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    host: {
      type: Schema.Types.String,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide valied email address.",
      ],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  { strict: false, timestamps: true }
)

const Form = mongoose.model("Form", formSchema)
module.exports = Form

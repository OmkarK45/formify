const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { nanoid } = require("nanoid")
const Submission = require("./Submission.model")
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
    formName: {
      type: String,
      default: "A New Form",
      max: 256,
      min: 3,
    },
    fields: [
      { type: String, length: 3, required: [true, "This field is required"] },
    ],
    // submissions: [{ type: Schema.Types.Mixed }],
    submissions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Submission",
      },
    ],

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    requiresVerification: {
      type: Boolean,
      default: true,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    emailNotifications: {
      type: Boolean,
      default: true,
    },
  },
  { strict: false, timestamps: true }
)

const Form = mongoose.model("Form", formSchema)
module.exports = Form

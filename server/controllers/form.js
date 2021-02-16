const User = require("../models/User.model")
const Form = require("../models/Form.model")
const ErrorResponse = require("../utils/errorResponse")
const { chain, get, isArguments } = require("lodash")
// @route -> /:username/forms/:formID

// @desc -> Find all form submissions for that user
exports.getForms = async (req, res) => {
  // get the userID in payload
  const { email } = req.user
  try {
    const user = await User.findOne({ email }).populate("forms")
    res.json({
      msg: "Here are your forms you created!",
      user,
    })
  } catch (error) {
    return next(
      new ErrorResponse("Something went wrong while fetching your forms ", 500)
    )
  }
  // Search that ID in database, populate the forms array and return that to the user
}

// @desc -> Find one form submission for that user and UUID
exports.getOneForm = async (req, res, next) => {
  // @TODO -> add username validation as well
  const { formID, email } = req.params
  if (!(formID && email)) {
    return next(
      new ErrorResponse("Sorry, We couldn't find the form with this ID", 400)
    )
  }
  try {
    const formFound = await Form.findOne({ formID })
    res.json({
      msg: "Found the form",
      formFound,
    })
  } catch (error) {
    return next(new ErrorResponse("Sorry something went wrong", 500))
  }
}

exports.postOneForm = async (req, res, next) => {
  const { email, formID } = req.params
  const { submission } = req.body
  console.log(fields)
  if (!email || !formID) {
    return next(new ErrorResponse("Please provide a formID and username"))
  }
  try {
    const foundForm = await Form.findOne({ formID })
    foundForm.submissions.push(submission)
    await foundForm.save()
    res.json({
      "Structure of the form ": foundForm,
      "Fields sent by user": submission,
    })
  } catch (error) {
    next(error)
  }
}

// @desc -> createForm creates a new form instance
exports.createForm = async (req, res, next) => {
  const { fields } = req.body
  const { email } = req.params
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return next(new ErrorResponse("Sorry we couldn't find this user."))
    }
    const newForm = await Form.create({
      fields: [fields],
      createdBy: user,
    })
    user.forms.push(newForm)
    await user.save()
    await newForm.save()

    res.status(200).json({
      msg: "Form created sucessfully !",
      success: true,
      user,
    })
  } catch (error) {
    next(error)
  }
}
// @desc -> handleFormSubmissions -> handles form submissions of that particular UUID

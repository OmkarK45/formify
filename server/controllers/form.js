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
    res.status(200).json({
      msg: "Here are your forms you created!",
      status: true,
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
  const { formID } = req.params
  const { email } = req.user
  if (!(formID && email)) {
    return next(new ErrorResponse("Please provide valid FormID and Email", 400))
  }
  try {
    const requestedForm = await Form.findOne({ formID })
    if (!requestedForm) {
      return next(
        new ErrorResponse(
          "Sorry, We couldn't find the form with this ID or Email. If you think this is a mistake, please contact support@formify.com.",
          404
        )
      )
    }
    res.status(200).json({
      // @TODO -> MSG could be better
      msg: "Found the form",
      success: true,
      requestedForm,
    })
  } catch (error) {
    return next(new ErrorResponse("Sorry, something went wrong.", 500))
  }
}

exports.postSubmissions = async (req, res, next) => {
  if (
    !req.body ||
    (req.method !== "POST" && req.method !== "PUT" && req.method !== "PATCH")
  ) {
    return next(
      new ErrorResponse(
        "Please make sure to make request using POST method",
        400
      )
    )
  }

  const { formID } = req.params
  const submissionData = req.body

  if (!formID) {
    return next(new ErrorResponse("Please provide a formID and username"))
  }

  try {
    const foundForm = await Form.findOne({ formID })
    foundForm.submissions.push(submissionData)
    await foundForm.save()
    res.status(200).json({
      "Structure of the form": foundForm,
      "Fields sent by user": submissionData,
    })
  } catch (error) {
    next(
      new ErrorResponse(
        "Something went wrong while submitting this form. Please try again or contact support@formify.com",
        500
      )
    )
  }
}

// @desc -> createForm creates a new form instance
exports.createForm = async (req, res, next) => {
  const { fields } = req.body
  const { email } = req.user
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return next(new ErrorResponse("Sorry we couldn't find this user."))
    }
    const newForm = await Form.create({
      fields,
      createdBy: user,
      host: email,
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

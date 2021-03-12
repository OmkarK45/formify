const User = require("../models/User.model")
const { newSubmissionTemplate } = require("./../utils/newSubmissionTemplate")
const Form = require("../models/Form.model")
const Submission = require("../models/Submission.model")
const ErrorResponse = require("../utils/errorResponse")
const sendEmail = require("../utils/sendEmail")

exports.getForms = async (req, res) => {
  const { email } = req.user
  try {
    const user = await User.findOne({ email }).populate("forms")
    return res.status(200).json({
      msg: "Here are your forms you created!",
      status: true,
      user,
    })
  } catch (error) {
    return next(
      new ErrorResponse("Something went wrong while fetching your forms ", 500)
    )
  }
}

// @desc -> Find one form submission for that user and UUID
exports.getOneForm = async (req, res, next) => {
  const { formID } = req.params
  const { email } = req.user

  if (!(formID && email)) {
    return next(new ErrorResponse("Please provide valid FormID and Email", 400))
  }
  try {
    const requestedForm = await Form.findOne({ formID }).populate("submissions")
    if (!requestedForm) {
      return next(
        new ErrorResponse(
          "Sorry, We couldn't find the form with this ID or Email. If you think this is a mistake, please contact support@formify.com.",
          404
        )
      )
    }

    res.status(200).json({
      msg: "Found the form",
      success: true,
      requestedForm,
    })
  } catch (error) {
    return next(new ErrorResponse("Sorry, something went wrong.", 500))
  }
}

exports.formSettings = async (req, res, next) => {
  const {
    formID,
    enabled,
    emailNotifications,
    requiresVerification,
    formName,
  } = req.body
  const { email } = req.user
  if (!(formID && email)) {
    return next(new ErrorResponse("Please provide valid FormID and Email", 400))
  }
  const form = await Form.findOne({
    formID,
  }).populate("createdBy")

  if (formName !== form.formName && formName !== "") {
    form["formName"] = formName
  }

  if (form.createdBy.email !== email) {
    return next(new ErrorResponse("You have no permission to edit this form"))
  }

  if (emailNotifications !== undefined) {
    form["emailNotifications"] = emailNotifications
  }

  if (enabled !== undefined) {
    form.enabled = enabled
  }

  if (requiresVerification !== undefined) {
    form.requiresVerification = requiresVerification
  }

  await form.save(function (err) {
    if (err) return next(new ErrorResponse(err, 500))
    return res.json(form)
  })
}

exports.postSubmissions = async (req, res, next) => {
  const submissionData = req.body
  const { formID } = req.params
  if (!submissionData) {
    next(new ErrorResponse("Please make sure to fill required fields", 400))
  }

  if (req.method !== "POST") {
    return res.render("endpage", {
      message: "Please make sure to use POST method.",
      heading: "Aw, Snap!",
      success: false,
    })
    return
  }

  if (!formID) {
    return next(new ErrorResponse("Please provide a formID and username"))
  }

  try {
    const foundForm = await Form.findOne({ formID })
      .populate("createdBy")
      .populate("submissions")

    if (foundForm) {
      const submission = await Submission.create({
        belongTo: foundForm._id,
        ...submissionData,
        createdAt: Date.now(),
      })
      // Self learning schema

      Object.keys(submissionData).map((sub) => {
        if (foundForm.fields.indexOf(sub) === -1) {
          return foundForm.fields.push(sub)
        }
      })
      foundForm.submissions.push(submission)

      console.log("FoundForm", foundForm.fields)
      console.log("Submission", submission)

      if (foundForm.enabled) {
        await submission.save()
        await foundForm.save()

        return res.render("endpage", {
          message: "We received your submission.",
          heading: "Thank you.",
          success: true,
        })
      }
      const html = newSubmissionTemplate(foundForm.formName, foundForm.formID)

      if (foundForm.emailNotifications) {
        await sendEmail({
          to: foundForm.createdBy.email,
          subject: `[Formify] : New Submission for ${foundForm.formName}`,
          text: html,
        })
      }
    } else {
      return res.render("endpage", {
        heading: "Invalid Form URL",
        message: "Please check if the form has correct action URL.",
        success: false,
      })
    }
  } catch (error) {
    console.log(error)
    return res.render("endpage", {
      success: false,
      message: error,
      heading: "Aw Snap!",
    })
  }
}

// @desc -> createForm creates a new form instance
exports.createForm = async (req, res, next) => {
  const { formName, fields } = req.body
  const { email } = req.user

  if (!formName || !fields) {
    return res.json({ msg: "Please fill all the fields required" })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return next(new ErrorResponse("Sorry we couldn't find this user.", 404))
    }

    function makeFields(fields) {
      const newFields = []
      // Reject file submissions
      fields.map((field) => {
        if (field.fieldType !== "file") {
          newFields.push(field.fieldValue)
        }
      })
      return newFields
    }

    const newForm = await Form.create({
      formName,
      fields: makeFields(fields),
      createdBy: user,
    })

    user.forms.push(newForm)
    await Promise.all([await user.save(), await newForm.save()])

    return res.status(200).json({
      msg: "Form created sucessfully !",
      success: true,
      user,
      newForm,
    })
  } catch (error) {
    next(
      new ErrorResponse(
        "Something went wrong while creating your form. Please try again.",
        500
      )
    )
  }
}

exports.deleteOneForm = async (req, res, next) => {
  const { formID } = req.body
  const { email } = req.user

  try {
    const formToBeDeleted = await Form.findOne({ formID }).populate("createdBy")

    if (!formToBeDeleted) {
      return res.status(404).json({
        msg: "Requested form was not found on this server",
      })
    }

    if (email === formToBeDeleted.createdBy.email) {
      await Form.deleteOne({ formID })
      return res.status(200).json({
        msg: "Your form was deleted successfully.",
      })
    } else {
      return res.json({
        msg: "You are not authorized to delete this form",
      })
    }
  } catch (error) {
    next(new ErrorResponse(error, 500))
  }
}

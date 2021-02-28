const User = require("../models/User.model")
const Form = require("../models/Form.model")
const Submission = require("../models/Submission.model")
const ErrorResponse = require("../utils/errorResponse")
const sendEmail = require("../utils/sendEmail")

exports.getForms = async (req, res) => {
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
      .populate("createdBy")
      .populate("submissions")
    // @TODO -> check if form is disabled by uyser
    const submission = await Submission.create({
      belongTo: foundForm._id,
      ...submissionData,
      createdAt: Date.now(),
    })

    foundForm.submissions.push(submission)

    await submission.save()

    await foundForm.save()

    res.status(200).render("submitted")

    if (foundForm.emailNotifications) {
      // @TODO -> Create a better email template
      await sendEmail({
        to: foundForm.createdBy.email,
        subject: `[Formify] : New Submission for ${foundForm.formName}`,
        html: "<h1>Login on formify to check who submitted it</>",
      })
    }
  } catch (error) {
    console.log(error)
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
  const { formName, fields } = req.body
  const { email } = req.user

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return next(new ErrorResponse("Sorry we couldn't find this user.", 404))
    }

    const newForm = await Form.create({
      formName,
      fields,
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
    next(
      new ErrorResponse(
        "Something went wrong while creating your form. Please try again.",
        500
      )
    )
  }
}

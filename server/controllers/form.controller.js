const User = require("../models/User.model");
const Form = require("../models/Form.model");
const ErrorResponse = require("../utils/errorResponse");
const { chain, get } = require("lodash");
// @route -> /:username/forms/:formID

// @desc -> Find all form submissions for that user
exports.getForm = async (req, res) => {
  res.json({
    msg: "Get route working for now",
  });
};

// @desc -> Find one form submission for that user and UUID

// @desc -> createForm creates a new form instance
exports.createForm = async (req, res, next) => {
  // Generate new form with a new uuid and send link to frontend
  //@TODO ->  Replace email with userID
  const { email, fields } = req.body;
  // Try to create a form into database
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorResponse("Sorry we couldn't find this user."));
    }
    const newForm = await Form.create({
      fields: [fields],
    });
    user.forms.push(newForm);
    await user.save();
    await newForm.save();

    res.status(200).json({
      msg: "Form created sucessfully !",
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
// @desc -> handleFormSubmissions -> handles form submissions of that particular UUID

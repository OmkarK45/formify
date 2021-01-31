const User = require("../models/User.model");
const Form = require("../models/Form.model");
const ErrorResponse = require("../utils/errorResponse");
const { chain, get } = require("lodash");
// @route -> /:username/forms/:formID
exports.getForm = async (req, res) => {
  res.json({
    msg: "Get route working for now",
  });
};

exports.createForm = async (req, res) => {
  const body = get(req, "body");

  const dynamicFieldsArray = Object.keys(body);

  const objToBeStored = {};
  dynamicFieldsArray.map((key, value) => {
    objToBeStored[key] = body[key];
  });
  console.log(objToBeStored);
};

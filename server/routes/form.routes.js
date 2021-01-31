const express = require("express");
const router = express.Router();
const { getForm, createForm } = require("../controllers/form.controller");
// @routes -> you are here /api/forms->
router.route("/:username/:formId").get(getForm);
// @todo -> add form middleware here
router.route("/:username/:formId").post(createForm);
module.exports = router;

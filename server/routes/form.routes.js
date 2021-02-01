const express = require("express");
const router = express.Router();
const { getForm, createForm } = require("../controllers/form.controller");
const { protect } = require("../middleware/auth.middleware");
// @routes -> you are here /api/forms->
router.route("/:username/").get(protect, getForm);
// @todo -> add form middleware here
router.route("/:username/:formId").post(protect, createForm);
module.exports = router;

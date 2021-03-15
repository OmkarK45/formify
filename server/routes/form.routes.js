const express = require("express")
const router = express.Router()
const {
  getOneForm,
  getForms,
  createForm,
  postSubmissions,
  formSettings,
  deleteOneForm,
  captchaVerification,
} = require("../controllers/form")
/*
  @TODO-> [Security][swap email for username]
*/
const { protect } = require("../middleware/authMiddleware")
// @routes -> you are here /api/forms->
router.route("/:username/all").get(protect, getForms)
router.route("/:username/create").post(protect, createForm)
// @desc -> get one form and see its submissions
router.route("/:formID/settings").put(protect, formSettings)
// @desc -> get one form with given ID and submit to the fields array
router.route("/:formID").get(protect, getOneForm)
router.route("/:formID").all(postSubmissions)
router.route("/:formID/delete").post(protect, deleteOneForm)
module.exports = router

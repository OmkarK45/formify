const express = require("express")
const router = express.Router()
const {
  getOneForm,
  getForms,
  createForm,
  postSubmissions,
} = require("../controllers/form")
const { protect } = require("../middleware/authMiddleware")
// @routes -> you are here /api/forms->
router.route("/:email/all").get(protect, getForms)

router.route("/:email/create").post(protect, createForm)
// @desc -> get one form and see its submissions
router.route("/:email/:formID").get(protect, getOneForm)

// @desc -> get one form with given ID and submit to the fields array
router.route("/f/:formID").post(postSubmissions)

module.exports = router

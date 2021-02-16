const express = require("express")
const router = express.Router()
const {
  getOneForm,
  getForms,
  createForm,
  postOneForm,
} = require("../controllers/form")
const { protect } = require("../middleware/authMiddleware")
// @routes -> you are here /api/forms->
router.route("/:email/all").get(protect, getForms)

// @desc -> get one form and see its submissions
router.route("/:email/:formID").get(protect, getOneForm)

// @desc -> get one form with given ID and submit to the fields array
router.route("/:email/:formID").post(protect, postOneForm)
// @todo -> add form middleware here
router.route("/:email/").post(protect, createForm)

module.exports = router

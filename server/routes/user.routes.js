const express = require("express")
const router = express.Router()
const { protect } = require("../middleware/authMiddleware")
const { updateEmail } = require("../controllers/user")

router.route("/updateEmail").post(protect, updateEmail)

module.exports = router

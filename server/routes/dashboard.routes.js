const express = require("express")
const router = express.Router()
const { getDashboard } = require("../controllers/dashboard")
const { protect } = require("../middleware/authMiddleware")

// @desc - /api/dashboard->
router.route("/").get(protect, getDashboard)
module.exports = router

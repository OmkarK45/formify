const express = require("express");
const router = express.Router();
const { getDashboard } = require("../controllers/dashboard.controller");
const { protect } = require("../middleware/auth.middleware");

router.route("/").get(protect, getDashboard);

module.exports = router;
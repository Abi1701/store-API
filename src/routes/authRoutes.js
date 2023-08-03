const express = require("express");
const router = express.Router();
const {
	userSignUp,
	userLogin,
	findOne,
} = require("../controller/authController/authController");
const authMiddleware = require("../middleware/authMiddleware/authMiddleware");
const userMiddleware = require("../middleware/restricted");

router.post(
	"/api/auth/register",
	[authMiddleware.checkDuplicateEmailOrUsername],
	userSignUp
);
router.post("/api/auth/login", userLogin);
router.get("/api/profile", userMiddleware, findOne);

module.exports = router;

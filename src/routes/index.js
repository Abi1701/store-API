const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");

router.use("/user", authRoutes);
router.use("/product", productRoutes);

module.exports = router;

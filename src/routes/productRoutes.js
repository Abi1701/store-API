const express = require("express");
const router = express.Router();

const {
	addProducts,
	findProducts,
	updateProducts,
	deleteProducts,
} = require("../controller/productController/productController");

const productMiddleware = require("../middleware/productMiddleware/productMiddleware");

router.post(
	"/addProducts",
	[productMiddleware.checkDuplicateProducts],
	addProducts
);
router.get("/findProducts", findProducts);
router.put("/updateProducts", updateProducts);
router.delete("/deleteProduct/:id", deleteProducts);

module.exports = router;

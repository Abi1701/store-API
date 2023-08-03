const db = require("../../models/index");

class productMiddleware {
	async checkDuplicateProducts(req, res, next) {
		try {
			let productName = await db.database.products.findOne({
				where: {
					productName: req.body.productName,
				},
			});
			if (productName) {
				return res.status(400).send({
					message: "Failed! this Product already inputed!",
				});
			}
			next();
		} catch (error) {
			return res.status(500).send({
				message: error.message,
			});
		}
	}
}
module.exports = new productMiddleware();

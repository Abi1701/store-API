const db = require("../../models");

class Products {
	async addProducts(req, res) {
		try {
			await db.database.products.create({
				productName: req.body.productName,
				productPrice: req.body.productPrice,
				productDescription: req.body.productDescription,
				marketPlace: req.body.marketPlace,
				productImage: req.body.productImage,
			});
			res.status(200).send({
				message: "Product Added Successfully",
			});
		} catch (error) {
			res.status(500).send({
				message: "Error Adding Product",
			});
		}
	}
	async findProducts(req, res) {
		try {
			const products = db.database.products.findOne({
				where: {
					id: req.products.id,
				},
			});
			res.status(200).send({
				id: products.id,
				productName: products.productName,
				productPrice: products.productPrice,
				marketPlace: products.marketPlace,
				productDescription: products.productDescription,
			});
		} catch (error) {}
	}
	async updateProducts(req, res) {
		try {
			await db.database.products.update({
				productName: req.body.productName,
				productPrice: req.body.productPrice,
				productDescription: req.body.productDescription,
			});
			res.status(200).send({
				message: "Product Update Successfully",
			});
		} catch (error) {
			res.status(500).send({
				message: "Error Updating Product",
			});
		}
	}
	async deleteProducts(req, res) {
		try {
			await db.database.products.destroy({
				where: {
					id: req.products.id,
				},
			});
			res.status(200).send({
				message: "Deleted successfully",
			});
		} catch (error) {
			res.status(500).send({
				message: "Failed to Delete",
			});
		}
	}
}
module.exports = new Products();

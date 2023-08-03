const db = require("../../models/index");

class authMiddleware {
	async checkDuplicateEmailOrUsername(req, res, next) {
		try {
			let username = await db.database.user.findOne({
				where: {
					username: req.body.username,
				},
			});
			if (username) {
				return res.status(400).send({
					message: "Failed! this Username Already Taken!",
				});
			}
			let email = await db.database.user.findOne({
				where: {
					email: req.body.email,
				},
			});
			if (email) {
				return res.status(400).send({
					message: "Failed! Email is already in use!",
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

module.exports = new authMiddleware();

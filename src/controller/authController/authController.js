const db = require("../../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class User {
	async userSignUp(req, res) {
		try {
			await db.database.user.create({
				username: req.body.username,
				email: req.body.email,
				password: bcrypt.hashSync(req.body.password, 8),
			});
			res.status(200).send({ message: "User was registered successfully!" });
		} catch (error) {
			res.status(500).send({ message: "User was registered unsuccessfully!" });
		}
	}
	async userLogin(req, res) {
		try {
			const user = await db.database.user.findOne({
				where: {
					email: req.body.email,
				},
			});

			if (!user) {
				return res.status(404).send({ message: "User Not found." });
			}

			const passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: "Invalid Password!",
				});
			}

			const token = jwt.sign({ id: user.id }, "rstore", {
				expiresIn: 86400, // 24 hours
			});

			return res.status(200).send({
				id: user.id,
				username: user.username,
				email: user.email,
				accessToken: token,
			});
		} catch (error) {
			return res.status(500).send({
				message:
					error.message || "Some error occurred while creating the Token.",
			});
		}
	}
	async findOne(req, res) {
		try {
			const user = await db.database.user.findOne({
				where: {
					id: req.user.id,
				},
			});
			res.status(200).send({
				id: user.id,
				email: user.email,
				nama: user.nama,
			});
		} catch (error) {
			res.status(500).send({
				message: error.message,
			});
		}
	}
}
module.exports = new User();

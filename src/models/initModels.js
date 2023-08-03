const DataTypes = require("sequelize").DataTypes;
const _user = require("./userModel.js");
const _products = require("./productModel.js");

function initModels(sequelize) {
	const user = _user(sequelize, DataTypes);
	const products = _products(sequelize, DataTypes);

	user.hasMany(products, { as: "products", foreignKey: "id_products" });
	products.belongsTo(user, { as: "user", foreignKey: "id_user" });
	return {
		user,
		products,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

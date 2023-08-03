const dbConfig = require("../utils/utils");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,
	port: dbConfig.PORT,
	timezone: "+07:00",
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});

const db = {};
db.Sequelize = sequelize;
db.sequelize = sequelize;
db.database = require("./initModels")(sequelize, Sequelize);
module.exports = db;

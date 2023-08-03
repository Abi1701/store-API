module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"products",
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: sequelize.literal("uuid_generate_v4()"),
				primaryKey: true,
			},
			productName: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			productPrice: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			productDescription: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			marketPlace: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			productImage: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: true,
				defaultValue: sequelize.literal("timezone('utc'::text, now())"),
			},
		},
		{
			sequelize,
			tableName: "products",
			schema: "public",
			timestamps: false,
			indexes: [
				{
					name: "products_pkey",
					unique: true,
					fields: [{ name: "id" }],
				},
			],
		}
	);
};

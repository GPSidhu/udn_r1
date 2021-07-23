module.exports = (sequelize, DataTypes) => {
	// add all available data types for Sequelize
	const User = sequelize.define("users", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		phone: {
			type: DataTypes.STRING,
			validate: {
				not: ["[a-z]", "i"],
			},
		},
		// hashedPassword: {
		// 	type: DataTypes.STRING(64),
		// 	is: /^[0-9a-f]{64}$/i,
		// },
	});
	User.associate = (model) => {
		User.belongsToMany(models.groups, {
			through: "user_group",
			as: "groups",
			foreignKey: "user_id",
		});
		User.belongsToMany(models.expenses, {
			through: "user_expenses",
			as: "expenses",
			foreignKey: "user_id",
		});
	};
	return User;
};

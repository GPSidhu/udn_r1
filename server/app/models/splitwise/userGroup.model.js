module.exports = (sequelize, DataTypes) => {
	const UserGroup = sequelize.define("user_group", {
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "users",
				key: "id",
			},
		},
		group_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "groups",
				key: "id",
			},
		},
	});
	return UserGroup;
};

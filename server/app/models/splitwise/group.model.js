module.exports = (seq, Sequelize) => {
	const Group = seq.define("groups", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.STRING,
		},
		avatar: {
			type: Sequelize.STRING,
		},
	});
	Group.associate = (model) => {
		Group.belongsToMany(model.user, {
			through: "user_group",
			as: "users",
			foreignKey: "group_id",
		});
	};
	return Group;
};

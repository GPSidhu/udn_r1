const { STATUS_TYPES } = require("../constants");

module.exports = (sequelize, DataTypes) => {
	// add all available data types for Sequelize
	const Service = sequelize.define("services", {
		service_id: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		status: {
			type: DataTypes.STRING,
			defaultValue: STATUS_TYPES.RED,
		},
		active: {
			type: DataTypes.BOOLEAN,
		},
		last_ping: {
			type: DataTypes.DATE,
		},
		// ip address / port
		// authentication if a new request came for the same service id
	});

	return Service;
};

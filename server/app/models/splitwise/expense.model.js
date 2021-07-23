const { SPLIT_TYPES, CURRENCIES } = require("../constants");

module.exports = (seq, DataTypes) => {
	const Expense = seq.define("expense", {
		//[id, paid_by,  split_type, amount]
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		paid_by_multiple: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		currency: {
			type: DataTypes.STRING,
			defaultValue: CURRENCIES.INR,
			// not null
		},
		amount: {
			type: DataTypes.DOUBLE,
			defaultValue: 0.0,
		},
		split_type: {
			type: DataTypes.STRING,
			defaultValue: SPLIT_TYPES.EQUAL,
		},
	});
	return Expense;
};

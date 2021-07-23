// [expense_id, user_id, is_debiter, amount, currency]
// const { SPLIT_TYPES, CURRENCIES } = require("../constants");
module.exports = (seq, DataTypes) => {
	const UserExpense = seq.define("user_expenses", {
		expense_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.STRING,
		},
		debiter_id: {
			type: DataTypes.STRING,
		},
		is_debiter: {
			type: DataTypes.BOOLEAN,
		},
		amount: {
			type: DataTypes.DOUBLE,
			defaultValue: 0.0,
		},
		currency: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
	return Expense;
};

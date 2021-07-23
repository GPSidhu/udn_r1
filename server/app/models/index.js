const dbConfig = require("../config/dbConfig.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Add models

// db.users = require("./splitwise/user.model.js")(sequelize, Sequelize.DataTypes);
// db.groups = require("./splitwise/group.model")(sequelize, Sequelize.DataTypes);
// db.user_groups = require("./splitwise/userGroup.model")(sequelize, Sequelize.DataTypes);
// db.expense = require("./splitwise/expense.model")(sequelize, Sequelize.DataTypes);
db.users = require("./services.model")(sequelize, Sequelize.DataTypes);

module.exports = db;

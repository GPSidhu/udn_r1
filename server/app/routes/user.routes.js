module.exports = (app) => {
	const users = require("../controllers/user.controller");

	var router = require("express").Router();

	// Create a new User
	router.post("/", users.create);

	// Fetch all users
	router.get("/", users.findAll);

	// Fetch all active users
	router.get("/active", users.findAllActive);

	// Fetch user by id
	router.get("/:id", users.findOne);

	// Update a user
	router.put("/:id", users.update);

	// Delete a user
	router.delete("/:id", users.delete);

	app.use("/api/users", router);
};

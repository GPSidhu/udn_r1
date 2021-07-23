module.exports = (app) => {
	const healthChecker = require("../controllers/healthChecker.controller");

	var router = require("express").Router();

	// Register a new service
    router.post("/register", healthChecker.register);
    
    router.post("/ping", healthChecker.ping);

	// // Fetch all users
	// router.get("/", users.findAll);

	// // Fetch all active users
	// router.get("/active", users.findAllActive);

	// // Fetch user by id
	// router.get("/:id", users.findOne);

	app.use("/health/checker", router);
};

const e = require("express");
const db = require("../models");
const Services = db.services;
const Op = db.Sequelize.Op;

// create and save a new user
exports.create = (req, res) => {
	console.log(req.body);

	// if (!req.body.service_id) {
	// 	// to do : create a new unique id for the  service to register
	// 	res.status(400).send({
	// 		message: "Cannot register service without service_id!",
	// 	});
	// 	return;
	// }

	// to do:  validate

	const service = {
		service_id: req.body.service_id,
		active: true, // to do : re-check default status
		last_ping: new Date(),
	};

	Service.create(service)
		.then((data) => {
			console.log("Service registered, data: ");
			console.log(data);
			res.send(data);
			// push to the queue of services being monitored
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Something went wrong while registering Service",
			});
		});
};

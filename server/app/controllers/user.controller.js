const e = require("express");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// create and save a new user
exports.create = (req, res) => {
	console.log(req.body);
	if (!req.body.name) {
		res.status(400).send({ message: "Content cannot be empty!" });
		return;
	}

	const user = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone ? req.body.phone : false,
		// active: req.body.active ? req.body.active : false,
	};
	User.create(user)
		.then((data) => {
			console.log("user created, data: ");
			console.log(data);
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Something went wrong while creating User",
			});
		});
};

// Read Fetch all users from db
exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	User.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Something went wrong while fetching users",
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;

	User.findByPk(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error while retrieving users with id = " + id,
			});
		});
};

//update
exports.update = (req, res) => {
	const id = req.params.id;
	User.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "User updated successfully",
				});
			} else {
				res.send({
					message: `Error while updating user with id = ${id}`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Users with id = " + id,
			});
		});
};

// delete
exports.delete = (req, res) => {
	const id = req.params.id;
	User.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "User was deleted successfully",
				});
			} else {
				res.send({
					message: `Error while deleting user with id=${id}`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					`Server error, could not delete user with id = ${id}`,
			});
		});
};

// fetch with condition
exports.findAllActive = (req, res) => {
	User.findAll({ where: { active: true } })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Something went wrong while fetching active users",
			});
		});
};

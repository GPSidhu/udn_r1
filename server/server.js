const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");

const app = express();

const PORT = process.env.PORT || 8080;
var corsOptions = {
	origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // content-type - application/x-www-form-urlencoded

const db = require("./app/models");

db.sequelize.sync();

app.get("/", (req, res) => {
	res.json({ message: "Welcome to machine coding round" });
});

require("./app/routes/user.routes")(app);

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});

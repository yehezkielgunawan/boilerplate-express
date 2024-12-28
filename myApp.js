require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

console.log("Hello World!");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
});

app.get(
	"/now",
	(req, res, next) => {
		req.time = new Date().toString();
		next();
	},
	(req, res) => {
		res.json({ time: req.time });
	},
);

app.use("/public", express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
	const absolutePath = `${__dirname}/views/index.html`;
	res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
	const message = "Hello json";
	// make it uppercase based on environment variable
	res.json({
		message:
			process.env.MESSAGE_STYLE === "uppercase"
				? message.toUpperCase()
				: message,
	});
});

app.get("/:word/echo", (req, res) => {
	res.json({ echo: req.params.word });
});

app.get("/name", (req, res) => {
	const { first, last } = req.query;
	res.json({ name: `${first} ${last}` });
});

app.post("/name", (req, res) => {
	const { first, last } = req.body;
	res.json({ name: `${first} ${last}` });
});

module.exports = app;

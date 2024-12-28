require('dotenv').config();
const express = require('express');
const app = express();

console.log("Hello World!");

app.use("/public", express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
    const absolutePath = `${__dirname}/views/index.html`;
    res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
    const message = "Hello json";
    // make it uppercase based on environment variable
    res.json({ message: process.env.MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message });
});


 module.exports = app;

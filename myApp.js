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
    res.json({ message });
});


 module.exports = app;

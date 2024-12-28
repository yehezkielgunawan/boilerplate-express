const express = require('express');
const app = express();

console.log("Hello World!");

app.use("/public", express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
    const absolutePath = `${__dirname}/views/index.html`;
    res.sendFile(absolutePath);
});

 module.exports = app;

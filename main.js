const express = require('express');
const app = express();


app.use(express.static("./client"));

app.get("/", function(req, res) {
    res.sendFile("./client/main.html");
})

app.listen(80);
const express = require('express');
const router = express.Router();
const app = express();


app.use(express.static("./client"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/client/main.html");
})

app.get("/ads.txt", function(req,res){
    res.send("google.com, pub-7170774391473826, DIRECT, f08c47fec0942fa0");
})

app.listen(80);
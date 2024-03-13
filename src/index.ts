import express from "express";

const app = express();

app.get("/", function(req, res) {
    res.send("Hello from server.");
})

app.listen(3000);
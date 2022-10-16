// require dependencies 
const express = require("express");
const fs = require("fs");

// tell app to use port and default to 3001 if not set 
const PORT = process.env.PORT || 3001;

// initialize app variable to run express.js
const app = express();

// set up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// html routes created
app.get("/html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/html", (req, res) => {
    res.sendFile(__dirname + "/notes.html");
})

// API routes creaed 

// set up listen method to make the server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})
const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// app.get("/api/notes", function(req, res){

//     res.json()
// });

// app.post("/api/notes", function(req, res){

// });

// app.delete("/api/notes", function(req, res){

// });


const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//gives an array of objects ID's starting from zero
function setId(db){
    for (let i = 0; i < db.length; i++){
        db[i].id = i;
    }
    return db;
}

module.exports = function(app) {
    // api/notes: gets the notes for user
    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            //convert string to array of objects
            let db = JSON.parse(data);
            //give objects an ID to reference
            let dbId = setId(db);
            //give front end the notes
            res.json(dbId);
        });
    });
}
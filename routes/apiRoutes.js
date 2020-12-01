

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
    // api/notes: gets the notes from db for user
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

    // api/notes post pushes note to db and saves db
    app.post("/api/notes", function(req, res){
        //get input from request
        let postedNote = { ...req.body };
        //gets the db
        fs.readFile("./db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            let db = JSON.parse(data);
            //add posted note to db
            db.push(postedNote);
            //give notes unique ID's
            let dbId = setId(db);

            //save changes to database and send them back.
            fs.writeFile("./db/db.json", JSON.stringify(dbId), function () {
                console.log("Note Added");
                return res.json(dbId);
            });
        });
    });

    app.delete("/api/notes/:id", function(req, res){
        fs.readFile("./db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            const db = JSON.parse(data);
            //input value for note to delete
            let index = req.params.id;
            //delete this note
            db.splice(index, 1);
            dbId = setId(db);

            //save changes and send them back.
            fs.writeFile("./db/db.json", JSON.stringify(dbId), function () {
                return res.json(dbId);
            });
        });
    });
}
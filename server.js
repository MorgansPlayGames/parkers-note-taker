const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/htmlRoutes.js")(app);



// app.get("/api/notes", function(req, res){

//     res.json()
// });

// app.post("/api/notes", function(req, res){

// });

// app.delete("/api/notes", function(req, res){

// });

app.listen(PORT, function(){
    console.log("start best server. Port:" + PORT);
})
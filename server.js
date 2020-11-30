
//dependencies
const express = require("express");

//express setup
const app = express();
const PORT = process.env.PORT || 3000;

//express data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//access to webpages on server
app.use(express.static(__dirname + '/public'))

//call route 
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//start responding to calls
app.listen(PORT, function(){
    console.log("start best server. Port:" + PORT);
})
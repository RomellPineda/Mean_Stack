const express = require("express");
const app = express();
var path = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});
io.on("connection", function (socket) { //2

    socket.on("posting_form", function(object){
        console.log(object);
        console.log("Server says: Did I get the survey data?");
        socket.emit("updated_message", {response : "You emitted the following information to the server:", survey_datar : object});
        socket.emit("random_number", {response : "Your lucky number emitted by the server is:", random : Math.ceil(Math.random()*1000)});
    });
});
const express = require("express");
const app = express();
var path = require("path");

app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});
io.on("connection", function (socket) { //2

    socket.emit("greeting", { msg: "Hello this is the Server transmission" }); //3
    socket.on("thankyou", function (data) { //7
        console.log(data.msg); //8 (note: this log will be on your server's terminal)
    });
    socket.on("posting_form", function(survey_data){
        console.log(survey_data);
        console.log("Server says: Did I get the survey data?");
        socket.emit("updated_message", {msg: survey_data});
    });
});
var express = require("express");
var app = express();

var path = require("path");
// bodyParser for extracting POST data
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({
    secret: 'theonekey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({ extended: true }));
// Enable requests to access static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root route to render the index.ejs in views
app.get("/", function (req, res) {
    console.log("Root triggered")
    res.render("index");
})
// post route for adding a user
app.post("/process", function (req, res) {
    console.log('Process triggered');
    console.log("POST DATA", req.body);
    // In lieu of database entering users data in session
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    res.redirect("/result");
})
app.get("/result", function (req, res) {
    console.log("Result triggered");
    console.log(req.session.language);
    var survey_results = [
        {name : req.session.name},
        {location : req.session.location},
        {language : req.session.language},
        {comment : req.session.comment}
    ]
    res.render("result", {result : survey_results});
})
// tell the express app to listen on port 8000
app.listen(7000, function () {
    console.log("listening on port 7000");
});
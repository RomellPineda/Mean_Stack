// require express
var express = require("express");
var app = express();
// path module -- try to figure out where and why we use this
var path = require("path");
var session = require('express-session');
// more new code:
app.use(session({
    secret: 'itisreallyhotinhere',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
// create the express app
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function (req, res) {
    if (req.session.count) {
        req.session.count++
    } else {
        req.session.count = 1
    }
    console.log(req.session.count);
    res.render("index", { count: req.session.count });
})
app.get('/reset', function (req, res) {
    req.session.count = 0;
    console.log(req.session.count);
    res.render("index", { count: req.session.count });
})
app.get('/addtwo', function (req, res) {
    req.session.count += 2;
    console.log(req.session.count);
    res.render("index", { count: req.session.count });
})
// post route for adding a user
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(7000, function () {
    console.log("listening on port 7000");
});
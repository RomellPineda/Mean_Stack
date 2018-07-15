var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo');
var UserSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: true})
mongoose.model('User', UserSchema); // Setting this Schema in Models as 'User'
var User = mongoose.model('User');

require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})
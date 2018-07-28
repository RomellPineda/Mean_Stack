const express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/critters');


var CritterSchema = new mongoose.Schema({
    name: String,
    info: String
})
mongoose.model('Critter', CritterSchema);

var Critter = mongoose.model('Critter')
mongoose.Promise = global.Promise;


app.get('/', function (req, res) {
    Critter.find({}, function (err, critters) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            console.log(critters);
            res.render('index', { critters: critters });
        }
    })
})

app.get('/createcrit/new', function (req, res) {
    console.log('get request /critter/new fired');
    res.render('add');
})

app.get('/showcritter/:id', function (req, res) {
    console.log('Show single route fired');
    Critter.findById({ _id: req.params.id }, function (err, crit) {
        if (err) {
            console.log('Error:', err);
            res.redirect('/');
        }
        else {
            console.log('Successfully found single critter', crit);
            res.render('single', { critter: crit });
        }
    })
})

app.post('/critters', function (req, res) {
    console.log("POST DATA", req.body);
    Critter.create(req.body, function (err, new_crit) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Successfully added a critter!', new_crit);
            res.redirect('/');
        }
    })
})

app.get('/critters/edit/:id', function (req, res) {
    Critter.findById({ _id: req.params.id }, function (err, crit) {
        if (err) {
            console.log('Error:', err);
            res.redirect('/');
        }
        else {
            console.log('Successfully found critter', crit)
            res.render('edit', { critter: crit });
        }
    })
})

app.post('/critters/:id', function (req, res) {
    console.log(req.params.id);
    Critter.update({ _id: req.params.id }, req.body, function (err, donut) {
        if (err) {
            console.log('Error:', err);
            res.redirect('/critters/edit/' + req.params.id);
        } else {
            console.log('Successfully edited a critter!', donut);
            res.redirect('/');
        }
    })
})

app.post('/critters/destroy/:id', function (req, res) {
    console.log(req.params.id);
    Critter.remove({ _id: req.params.id }, function (err, donut) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Successfully deleted a critter!', donut);
            res.redirect('/');
        }
    })
})

app.listen(7000, function () {
    console.log('listening on port 7000');
});
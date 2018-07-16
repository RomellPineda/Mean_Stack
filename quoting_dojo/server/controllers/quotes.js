const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    post: function (req, res) {
        var user = new User({ name: req.body.name, quote: req.body.quote });
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        user.save(function (err) {
            // if there is an error console.log that something went wrong!
            if (err) {
                console.log('something went wrong');
            }
            else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a user!');
                res.redirect('/');
            }
        })
    },
    quotes: function (req, res) {
        User.find({}, function (err, quotes) {
            res.render('quotes', { quotes: quotes });
        })
    },
    destroy: function (req, res) {
        // code...
    }
};
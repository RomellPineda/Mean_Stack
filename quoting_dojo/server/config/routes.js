const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = function(app){
    app.get('/', function(req, res) {
        // User.find({}, function(err, users) {
            // This is the method that finds all of the users from the database
            // Notice how the first parameter is the options for what to find and the second is the
            //   callback function that has an error (if any) and all of the users
            // Keep in mind that everything you want to do AFTER you get the users from the database must
            //   happen inside of this callback for it to be synchronous 
            // Make sure you handle the case when there is an error, as well as the case when there is no error
        //   })
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        res.render('index');
    })
    // Add User Request 
    app.post('/post', function(req, res) {
        console.log("POST DATA", req.body);
        // This is where we would add the user from req.body to the database.
        var user = new User({name: req.body.name, quote: req.body.quote});
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        user.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a user!');
                res.redirect('/');
            }
        })
    })
    app.get('/quotes', function(req, res) {
        User.find({}, function(err, quotes) {
            res.render('quotes', {quotes: quotes});
        })
    })
}
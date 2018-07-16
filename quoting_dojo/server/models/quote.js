const mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quote: {type: String, required: true, minlength:10},
}, {timestamps: true})
mongoose.model('User', UserSchema); // Setting this Schema in Models as 'User'

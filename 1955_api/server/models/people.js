const mongoose = require('mongoose');
var PersonSchema = new mongoose.Schema({
    name: {type: String, required: true},
}, {timestamps: true})
mongoose.model('Person', PersonSchema);
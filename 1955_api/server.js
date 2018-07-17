const express = require('express');
const app = express();
// const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(7000, function() {
    console.log("listening on port 7000");
})
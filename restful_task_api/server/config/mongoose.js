const path = require('path');
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task');

var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
   }
})
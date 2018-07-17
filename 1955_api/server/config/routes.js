const peoples = require('../controllers/peoples.js');

module.exports = function(app){
    app.get('/', peoples.index);
    app.get('/new/:name/', peoples.new_penguin);
    app.get('/remove/:name', peoples.remove);
    app.get('/:name', peoples.info);
}
const restfuls = require('../controllers/restfuls.js');

module.exports = function(app){
    app.get('/tasks', restfuls.index);
    app.get('/task/:id', restfuls.info);
    app.get('/new/:taskytask/:description', restfuls.new_task);
    app.get('/update/:id/:title/:desc', restfuls.update);
    app.get('/delete/:id', restfuls.delete);
}
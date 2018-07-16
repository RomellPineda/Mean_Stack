const quotes = require('../controllers/quotes.js');

module.exports = function(app){
    app.get('/', quotes.index);
    app.post('/post', quotes.post);
    app.get('/quotes', quotes.quotes);
}
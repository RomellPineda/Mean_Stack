const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

// Will not need because static will be loaded via line 8
// require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})
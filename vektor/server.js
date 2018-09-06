const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const server = app.listen(1337, () => console.log('/// Standing by on 1337'));
// const io = require('socket.io').listen(server);
const io = require('socket.io')(server);
users = [];
connections = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// app.listen(8000, function() {
//     console.log("listening on port 8000");
// })

io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Socket Linked: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected Socket Link: %s socket links remaining', connections.length);
    });

    // Send Message
    socket.on('send message', function(data) {
        console.log('Transmitted data:', data);
        io.sockets.emit('new message', {msg: data});
    })
})
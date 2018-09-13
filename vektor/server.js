const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// app.listen(8000, function() {
//     console.log("/// Standing by on 8000");
// })

// Socket.io
const server = app.listen(5000, () => {
    console.log('/// Standing by on 5000')
});
const io = require('socket.io')(server);
users = [];
connections = [];


io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', (data) => {
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length)
    });

    // Send Message
    socket.on('send message', (data) => {
        console.log(data);
        io.sockets.emit('new message', {msg: data, user: socket.username});
    });

    // New User
    socket.on('new_user', (data, callback) => {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit('get users', users)
    };

    // Thor
    socket.on('add-message', (data) => {
        console.log('Transmission received: ', data);
        io.emit('message', {msg: data});
      });
});

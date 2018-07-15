const express = require('express');
var app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A name is required"] },
    comment: { type: String, required: [true, "Comment must have content"] },
    _message: { type: Number, required: [true, "Comment must have content"] },
}, { timestamps: true })
var Comment = mongoose.model('Comment', CommentSchema);

const MessageSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A name is required"] },
    message: { type: String, required: [true, "Messages must have content"], minlength: [3, "Titles must have at least 3 characters"] },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true })
var Message = mongoose.model('Message', MessageSchema);

// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: [true, "A name is required"] },
//     messages: [MessageSchema]
// }, { timestamps: true })
// var User = mongoose.model('User', UserSchema);

mongoose.Promise = global.Promise;

// Requires additional components ///////////////
// const Comment = mongoose.Schema('Comment');
// const Message = mongoose.Schema('Message');

app.post('/comment/:id', function (req, res) {
    Comment.create(req.body, function (err, newcomm) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            User.findOneAndUpdate({ _id: req.params.id }, { $push: { messages: newcomm } }, function (err, newcomm) {
                if (err) {
                    console.log('Error:', err)
                }
                else {
                    console.log('Great success:', newcomm)
                }
            })
        }
    })
})

app.get('/', function (req, res) {
    User.find({}, function (err, shmessages) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            console.log(Users);
            res.render('index', { users: shmessages });
        }
    })
})

app.post('/post', function (req, res) {
    console.log('New message route triggered');
    Message.create(req.body, function (err, new_message) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            console.log('Success: created new message')
            res.render('/');
        }
    })
})

app.listen(7000, function () {
    console.log('listening on port 7000');
});
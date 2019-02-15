var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.apply());

app.post('/todos', (req, res) => {
//    console.log(req.body);
   var todo = new Todo({
       text: req.body.text,
   });

   todo.save().then((doc) => {
     res.send(doc);
   }, (e) => {
       res.status(400).send(e);
   })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1,
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var User = mongoose.model('User', {
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     }
// })

// var newUser = new User({
//     email: 'test@test.com'
// });

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// var otherTodo = new Todo({
//     text: '    Go shopping    ',
//     // completed: true,
//     // completedAt: 10
// });

// newUser.save().then((doc) => {
//     console.log("saved User", doc);
// }, (e) => {
//     console.log("Unble to save user", e);
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo')
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e)
// });

module.exports = {app};
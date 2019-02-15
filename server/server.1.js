var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

var newUser = new User({
    email: 'test@test.com'
});

var newTodo = new Todo({
    text: 'Cook dinner'
});

var otherTodo = new Todo({
    text: '    Go shopping    ',
    // completed: true,
    // completedAt: 10
});

newUser.save().then((doc) => {
    console.log("saved User", doc);
}, (e) => {
    console.log("Unble to save user", e);
});

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
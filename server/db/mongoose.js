var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// With ES6 it can be simplified if property and variable have the same name it can be shortened
// module.exports = {
//     mongoose: mongoose
// };
module.exports = {mongoose};
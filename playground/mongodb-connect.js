//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var user = {name: 'William', age: 36};
//var {name} = user;
//console.log(name);

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log(err);
        return console.log('Unable to connect to MongoDB server');
        
    }
    console.log('Connected to MOngoDB server');
    const db = client.db('TodoAPp');

//    db.collection('Todos').insertOne({
//      text: 'Something to do',
//      completed: false
//    }, (err, result) => {
//        if (err) {
//            return console.log('Unable to insert todo', err);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2))
//    });

//    db.collection('Users').insertOne({
////        _id: 123,
//        name: 'William',
//        age: 36,
//        location: 'Ulm'
//      }, (err, result) => {
//          if (err) {
//              return console.log('Unable to insert user', err);
//          }
//          console.log(JSON.stringify(result.ops, undefined, 2))
//          console.log(result.ops[0]._id.getTimestamp());
//      });


    client.close();
});
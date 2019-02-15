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

    // db.collection('Todos').find().toArray().then((docs) => {
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c548e525021541bbaf0836d')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // what find returns is a mongodb cursor (see mongo native documentation cursors)
    db.collection('Todos').find().count().then((count) => {
      console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({name: 'Enrique'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

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
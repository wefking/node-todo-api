//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log(err);
        return console.log('Unable to connect to MongoDB server');
        
    }
    console.log('Connected to MOngoDB server');
    const db = client.db('TodoAPp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c5590365eac95b6e8430b4d')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c54b6d03ed05f1e3305b124')
    }, {
        $set: {
            name: "William Enrique"
        }, 
        $inc: {
            age: -1
        }}, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    client.close();
});
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

    // db.collection('Todos').deleteMany({text: 'Walk'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Todos').deleteOne({text: 'Walk'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })
 
     db.collection('Users').deleteMany({name: "Enrique"}).then((result) => {
         console.log(result);
     });

     db.collection("Users").findOneAndDelete({
         _id: new ObjectID('123412341234123412341234')
     }).then((result) => {
         console.log(result);
     });

    client.close();
});
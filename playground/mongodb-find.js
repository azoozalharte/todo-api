// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(err);
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  db.collection('Users').find({name: "sara alharte"}).toArray().then((docs) => {
    console.log("got all collection");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  })


  // db.collection('Users').find().count().then((count) => {
  //   console.log(`the cout: ${count}`);
  // }, (err) => {
  //   console.log(err);
  // });

});

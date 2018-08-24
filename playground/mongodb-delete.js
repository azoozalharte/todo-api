// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(err);
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Hi from Atom Editer'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  //deleteOne
  // db.collection("Todos").deleteOne({text: 'something'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // })

  //findOneAndDelete

  db.collection('Todos').findOneAndDelete({text: 'something'}).then((result) => {
    console.log(result);
  })

});

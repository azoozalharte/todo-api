// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(err);
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');
  //
  // db.collection('Todos').insertOne({
  //   text:'Hi from Atom Editer',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // //
  // db.collection('Users').insertOne({
  //   name: 'sara alharte',
  //   age: 18,
  //   location: "SA Tife"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(err);;
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // })
  // client.close();
});

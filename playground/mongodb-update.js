// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(err);
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b7a4bf40b0ef014176a6070')
  }, {
    $set: {
      name: "Koko almakoko"
    },
    $inc: {
      age: 34
    }
  }, {
    returnOrginial: false
  }).then((docs) => {
    console.log(docs);
  })

});

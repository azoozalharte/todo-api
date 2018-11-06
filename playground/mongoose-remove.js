const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndDelete('5be212573439b5295138b001').then((todo) => {
  console.log(todo);
});

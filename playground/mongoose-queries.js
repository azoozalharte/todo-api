const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bb12ef75f12c21b17b08f831';
var userId = '5b83b16c59cb951da684301b';
if (!ObjectID.isValid(userId)) {
  console.log('UserID is not vaild');
}

// if (!ObjectID.isValid(id)) {
//   console.log("id is not vaild");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   if (!todos) {
//     return console.log('ids not found');
//   }
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if(!user){
    return console.log("User not found");
  }
  console.log('User', user);
}).catch((e) => {
  console.log(e);
})

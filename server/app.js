var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb')
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((docs) => {
    res.send(docs);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});


app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  //valid id isValid
  if(!ObjectID.isValid(id)) {
    res.status(404).send()
  }
    //404 - send back emty array
  Todo.findById(id).then((todoId) => {
    if(!todoId) {
      return res.status(404).send('id not found');
    }
    res.send(todoId);
  }).catch((e) => res.status(400).send());


});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};

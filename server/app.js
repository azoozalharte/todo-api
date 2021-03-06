const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb')
///
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Todo list');
});

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
    res.send({todoId});
  }).catch((e) => res.status(400).send());


});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findByIdAndDelete(id).then((todo) => {
    if (!todo) {
      return res.status(404).send('id not found');
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

    // if the body is boolean and the body is truy
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else { // if the body if not boolean or truy
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {$new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send()
  });

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

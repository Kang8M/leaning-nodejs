const express = require('express');

const app = express.Router();
const repository = require('../repositories/PostRepository');

app.post('/', (req, res) => {
  const { title, author, body, hidden } = req.body;

  repository.create(title, author, body, hidden)
    .then((post) => {
      res.json(post);
    }).catch((error) => {
      console.log(error);
    });
});

app.get('/', (req, res) => {
  repository.findAll()
    .then((post) => {
      res.json(post);
    }).catch((error) => {
      console.log(error);
    })
});

app.get('/:id', (req, res) => {
  const { id } = req.params;
  repository.findOne(id).then((post) => {
    res.status(200).json(post);
  }).catch((error) => console.log(error));
});

app.put('/:id', (req, res) => {
  const { id } = req.params;
  
  repository.updateById(
    id,
    req.body.title,
    req.body.author,
    req.body.body,
    req.body.hidden
  ).then(res.status(200).json([]))
  .catch((error) => {
    console.log(error);
  });
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;

  repository.deleteById(id).then((ok) => {
    console.log(ok);
    console.log(`Deleted record with id: ${id}`);
    res.status(200).json([]);
  }).catch((error) => {
    console.log(error);
  });
});

module.exports = app;


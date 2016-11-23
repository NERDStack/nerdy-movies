const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/movies', (req, res) => {
  data.queryMovies()
    .then(docs => {
      const movies = docs.map(doc => {
        return { id: doc.id, name: doc.name };
      });
      return res.json(movies);
    })
    .catch(err => {
      return res.json(err);
    });
});

router.post('/movies/:id/like', (req, res) => {
  data.likeMovie() // wip
});

module.exports = router;


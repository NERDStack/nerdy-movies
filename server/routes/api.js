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
  data.queryMovies(req.params.id)
    .then(docs => {
      if (docs.length > 0) {
        return data.likeMovie(docs[0]);
      }
      else {
        return res.send(`no movie found with id ${req.params.id}`);
      }
    })
    .then(res => {
      return res.json(err);
    })
    .catch(err => {
      return res.json(err);
    });
});

module.exports = router;


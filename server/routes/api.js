const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
  res.json({
    message: 'hello world'
  });
});

module.exports = router;


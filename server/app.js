const express = require('express');
const path = require('path');
const api = require('./routes/api');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('/api', api);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;


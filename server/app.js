const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('../database/models.js');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/bundle.js', express.static(path.resolve(__dirname, '../public/bundle.js')));
app.use('/:id', express.static(path.resolve(__dirname, '../public')));

// app.post

app.get('/api/photos/:id', (req, res) => {
  db.gather(req.params.id, (err, results) => {
    if (err) {
      console.log('error in app.get', err);
    } else {
      res.send(results);
    }
  });
});

// app.put

// app.delete

module.exports = app;

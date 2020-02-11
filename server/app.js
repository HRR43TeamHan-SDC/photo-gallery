const express = require('express');

const app = express();
// const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const db = require('../database/models.js');


// app.use(cors());
// app.use(morgan('dev'));
app.use(express.static('/../public'));
// app.use('/bundle.js', express.static(path.resolve(__dirname, '/../public/bundle.js')));

app.get('/api/photos/:restaurant_id', (req, res) => {
  db.gather(req.params.restaurant_id, (err, results) => {
    if (err) {
      console.log('error in app.get', err);
    } else {
      res.send(results);
    }
  });
});

// app.use('/:id', express.static(path.resolve(__dirname, '/../public')));

module.exports = app;

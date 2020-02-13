const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('../database/crud.js');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/bundle.js', express.static(path.resolve(__dirname, '../public/bundle.js')));
app.use('/:id', express.static(path.resolve(__dirname, '../public')));


// POST -- create new record
app.post('/api/photos', (req, res) => {
  const params = [
    req.body.image0,
    req.body.image1,
    req.body.image2,
    req.body.image3,
    req.body.image4,
    req.body.image5,
    req.body.image6,
    req.body.image7,
    req.body.image8,
    req.body.image9,
    req.body.image10,
    req.body.image11,
    req.body.image12,
    req.body.image13,
    req.body.image14,
    req.body.date,
  ];

  db.create(params, (err, newRecord) => {
    if (err) {
      console.log('error at app.post', err);
    } else {
      res.send(newRecord);
    }
  });
});


// GET
app.get('/api/photos/:id', (req, res) => {
  db.read(req.params.id, (err, data) => {
    if (err) {
      console.log('error at app.get', err);
    } else {
      console.log(Array.isArray(data));
      res.send(data);
    }
  });
});


// PUT
app.put('/api/photos/:id', (req, res) => {
  if (req.body.oldImage && req.body.newImage) { // swap photo in column where column is not null
    const params = [req.params.id, req.body.oldImage, req.body.newImage];

    db.updateSwap(params, (err, updatedRecord) => {
      if (err) {
        console.log('error at app.put swap', err);
      } else {
        res.send(updatedRecord);
      }
    });
  } else if (req.body.newImage) { // add photo to column where value is null
    const params = [req.params.id, req.body.newImage];

    db.updateAdd(params, (err, record, recordIsFull) => {
      if (err) {
        console.log('error at app.put add', err);
      } else if (record) {
        res.send(record);
      } else if (recordIsFull) {
        res.status(406).send(recordIsFull);
      }
    });
  }
});


// DELETE -- delete entire record
app.delete('/api/photos/:id', (req, res) => {
  const { id } = req.params;

  db.delete(id, (err, deletedRecord) => {
    if (err) {
      console.log('error at app.delete', err);
    } else {
      res.send(deletedRecord);
    }
  });
});


module.exports = app;

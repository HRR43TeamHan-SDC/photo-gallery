const express = require('express');
const path = require('path');
// const morgan = require('morgan');
// const db = require('../database/MySQL/crud.js');
const client = require('../database/mongoDB/index.js');
// const pool = require('../database/PostgreSQL/index.js');


const app = express();
// app.use(morgan('dev'));
app.use(express.json());

app.use('/bundle.js', express.static(path.resolve(__dirname, '../public/bundle.js')));
app.use('/loaderio*', express.static(path.resolve(__dirname, '../loaderio.txt')));
app.use('/:id', express.static(path.resolve(__dirname, '../public')));


// GET
app.get('/api/photos/:id', (req, res) => {
  // PostgreSQL
  // const query = {
  //   text: 'SELECT * FROM photos WHERE id = $1',
  //   values: [req.params.id],
  // };
  // pool.query(query)
  //   .then((data) => {
  //     if (data.rows.length === 0) {
  //       console.log('error--data is null:', data);
  //       res.sendStatus(400);
  //     } else {
  //       res.send(data.rows);
  //     }
  //   })
  //   .catch(() => res.sendStatus(400));


  // MongoDB
  client.db('photoGallery').collection('photos').findOne({ id: parseInt(req.params.id, 10) })
    .then((data) => {
      if (data === null) {
        console.log('error--data is null:', data);
        res.sendStatus(400);
      } else {
        res.send([data]);
      }
    })
    .catch((er) => console.log('error at app.get', er));


//   MySQL -- GET
//   db.read(req.params.id, (err, data) => {
//     if (err) {
//       console.log('error at app.get', err);
//     } else {
//       res.send(data);
//     }
//   });
});


// POST -- create new record
app.post('/api/photos', (req, res) => {
  // PostgreSQL
  // const insertQuery = {
  /* eslint-disable-line */ //   text: 'INSERT INTO photos(id,image0,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *',
  //   values: [
  //     -1,
  //     req.body.image0,
  //     req.body.image1,
  //     req.body.image2,
  //     req.body.image3,
  //     req.body.image4,
  //     req.body.image5,
  //     req.body.image6,
  //     req.body.image7,
  //     req.body.image8,
  //     req.body.image9,
  //     req.body.image10,
  //     req.body.image11,
  //     req.body.image12,
  //     req.body.image13,
  //     req.body.image14,
  //     req.body.date,
  //   ],
  // };

  // pool.query('SELECT max(id) FROM photos')
  //   .then((lastId) => {
  //     insertQuery.values[0] = lastId.rows[0].max + 1;
  //     pool.query(insertQuery)
  //       .then((row) => res.send(row.rows))
  //       .catch((err) => res.send(err));
  //   })
  //   .catch((er) => res.send(er));


  // mongoDB
  const doc = {
    id: -1,
    image0: req.body.image0,
    image1: req.body.image1,
    image2: req.body.image2,
    image3: req.body.image3,
    image4: req.body.image4,
    image5: req.body.image5,
    image6: req.body.image6,
    image7: req.body.image7,
    image8: req.body.image8,
    image9: req.body.image9,
    image10: req.body.image10,
    image11: req.body.image11,
    image12: req.body.image12,
    image13: req.body.image13,
    image14: req.body.image14,
    date: req.body.date,
  };

  client.db('photoGallery').collection('photos').findOne({}, { limit: 1, sort: [['id', -1]] })
    .then((data) => {
      doc.id = data.id + 1;
      client.db('photoGallery').collection('photos').insertOne(doc)
        .then((insertedDoc) => res.send(insertedDoc.ops))
        .catch(() => res.send(400));
    })
    .catch(() => res.send(400));


  // MySQL
  // const params = [
  // req.body.image0,
  // req.body.image1,
  // req.body.image2,
  // req.body.image3,
  // req.body.image4,
  // req.body.image5,
  // req.body.image6,
  // req.body.image7,
  // req.body.image8,
  // req.body.image9,
  // req.body.image10,
  // req.body.image11,
  // req.body.image12,
  // req.body.image13,
  // req.body.image14,
  // req.body.date,
  // ];

  // db.create(params, (err, newRecord) => {
  //   if (err) {
  //     console.log('error at app.post', err);
  //   } else {
  //     res.send(newRecord);
  //   }
  // });
});


// PUT -- MySQL
// app.put('/api/photos/:id', (req, res) => {
//   if (req.body.oldImage && req.body.newImage) { // swap photo in column where column is not null
//     const params = [req.params.id, req.body.oldImage, req.body.newImage];

//     db.updateSwap(params, (err, updatedRecord) => {
//       if (err) {
//         console.log('error at app.put swap', err);
//       } else {
//         res.send(updatedRecord);
//       }
//     });
//   } else if (req.body.newImage) { // add photo to column where value is null
//     const params = [req.params.id, req.body.newImage];

//     db.updateAdd(params, (err, record, recordIsFull) => {
//       if (err) {
//         console.log('error at app.put add', err);
//       } else if (record) {
//         res.send(record);
//       } else if (recordIsFull) {
//         res.status(406).send(recordIsFull);
//       }
//     });
//   }
// });


// DELETE -- delete entire record -- MySQL
app.delete('/api/photos/:id', (req, res) => {
  // PostgreSQL
  // const query = {
  //   text: 'DELETE FROM photos WHERE id=$1 RETURNING *',
  //   values: [req.params.id],
  // };

  // pool.query(query)
  //   .then((row) => res.send(row.rows))
  //   .catch((err) => res.send(err));


  // mongoDB
  client.db('photoGallery').collection('photos')
    .findOneAndDelete({ id: parseInt(req.params.id, 10) })
    .then((record) => res.send(record))
    .catch((err) => res.send(err));


  // MySQL
  // const { id } = req.params;

  // db.delete(id, (err, deletedRecord) => {
  //   if (err) {
  //     console.log('error at app.delete', err);
  //   } else {
  //     res.send(deletedRecord);
  //   }
  // });
});


module.exports = app;

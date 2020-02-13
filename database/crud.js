const db = require('./index.js');

module.exports = {
  create: (params, callback) => {
    db.query('INSERT INTO photos (image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        db.query(`SELECT * FROM photos WHERE id=${data.insertId}`, (error, newRecord) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, newRecord);
          }
        });
      }
    });
  },
  read: (id, callback) => {
    db.query(`SELECT * FROM photos WHERE id=${id}`, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
  updateSwap: (params, callback) => {
    module.exports.read(params[0], (err, record) => {
      if (err) {
        callback(err, null);
      } else { // find column to update
        const keys = Object.keys(record[0]);
        let column;
        for (let key = 0; key < keys.length; key += 1) {
          if (record[0][keys[key]] === params[1]) {
            column = keys[key];
            break;
          }
        }

        if (column === undefined) { // edge case check
          callback('error finding column in crud.js updateSwap', null);
        }

        db.query(`UPDATE photos SET ${column}="${params[2]}" WHERE id=${params[0]}`, (error) => {
          if (error) {
            callback(error, null);
          } else {
            module.exports.read(params[0], (er, updatedRecord) => {
              if (er) {
                callback(er, null);
              } else {
                callback(null, updatedRecord);
              }
            });
          }
        });
      }
    });
  },
  updateAdd: (params, callback) => {
    module.exports.read(params[0], (err, record) => {
      if (err) {
        callback(err, null, null);
      } else {
        const keys = Object.keys(record[0]);
        let column;
        for (let key = 0; key < keys.length; key += 1) {
          if (record[0][keys[key]] === null || record[0][keys[key]] === 'null' || record[0][keys[key]] === 'NULL') {
            column = keys[key];
            break;
          }
        }

        if (column === undefined) { // edge case check
          callback(null, null, 'Record already contains maximum number of photos');
          return;
        }

        db.query(`UPDATE photos SET ${column}="${params[1]}" WHERE id=${params[0]}`, (error) => {
          if (error) {
            callback(error, null, null);
          } else {
            module.exports.read(params[0], (er, updatedRecord) => {
              if (er) {
                callback(er, null, null);
              } else {
                callback(null, updatedRecord, null);
              }
            });
            // db.query(`SELECT * FROM photos WHERE id=${params[0]}`, (er, updatedRecord) => {
            //   if (er) {
            //     callback(er, null, null);
            //   } else {
            //     callback(null, updatedRecord, null);
            //   }
            // });
          }
        });
      }
    });
  },
  delete: (id, callback) => {
    module.exports.read(id, (err, recordToDelete) => {
      if (err) {
        console.log('error at crud.js delete this.read', err);
      } else {
        db.query(`DELETE FROM photos WHERE id=${id}`, (error) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, recordToDelete);
          }
        });
      }
    });
  },
};

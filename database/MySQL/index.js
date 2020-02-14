const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.HOST || 'localhost',
  user: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || '',
  database: 'photoGallery',
});

db.connect(
  console.log('connected'),
);

module.exports = db;

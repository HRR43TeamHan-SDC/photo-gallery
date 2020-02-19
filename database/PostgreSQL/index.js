// from SQL Shell (psql) terminal -- not macOS terminal
// \copy photos from '/Users/kennethwarren/Downloads/mongoExport.csv' csv header;

const { Pool } = require('pg');

// PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'photoGallery',
  password: 'hrr43',
  port: 5432,
});

module.exports = pool;

const { MongoClient } = require('mongodb');
const URI = require('./URI.js');

const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();

module.exports = client;

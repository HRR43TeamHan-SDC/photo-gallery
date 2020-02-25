const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://13.59.77.47:27017', { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();

module.exports = client;

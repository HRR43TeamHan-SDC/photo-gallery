const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'photoGallery';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    client.close();
  }
  const db = client.db(dbName);
  const photos = db.collection('photos');

  // queries go here

  console.log('connected to server');
});

// 'on' continuosly registers same event listener,
// once registers, unregisters, then invokes listener

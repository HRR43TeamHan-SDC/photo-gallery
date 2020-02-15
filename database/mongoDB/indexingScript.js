// Seed MongoDB with CSV file using the following command
//   mongoimport --db=photoGallery --collection=photos --type=csv
//   --headerline --file=<filename>.csv


// indexing database script

// const { MongoClient } = require('mongodb');

// const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });


// const createIndex = () => {
//   client.connect((err) => {
//     if (err) {
//       console.log('error connecting to database', err);
//       client.close();
//     } else {
//       client.db('photoGallery').collection('photos').createIndex({ id: 1 }, (error, result) => {
//         if (error) {
//           console.log('error creating index', error);
//           client.close();
//         } else {
//           console.log('index created:\n', result);
//           client.close();
//         }
//       });
//     }
//   });
// };

// createIndex();

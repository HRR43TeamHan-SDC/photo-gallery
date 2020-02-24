/* eslint-disable */
// Seed MongoDB with CSV file using the following command
// from normal terminal prompt -- not mongo or mongod
/* eslint-disable-line */ // mongoimport --db=photoGallery --collection=photos --type=csv --headerline --file=photoGalleryData.csv

// export command
// from normal terminal prompt -- not mongo or mongod
// mongoexport --db=photoGallery --collection=photos --type=csv
// --fields=id,image0,image1,image2,image3,image4,image5,image6,image7,image8,
// image9,image10,image11,image12,image13,image14,date
// --out=/Users/kennethwarren/Downloads/mongoExport.csv


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


// delete posts after stress testing
// client.connect((er) => {
//   if (er) {
//     console.log('error connecting to database', er);
//     client.close();
//   } else {
//     const deleteAfter10M = () => {
//       client.db('photoGallery').collection('photos').deleteMany({ date: 'October 6-2021' })
//         .then((result) => {
//           if (result.deletedCount > 0) {
//             console.log('success!');
//             client.close();
//           } else {
//             console.log('deleteCount !== 1');
//             client.close();
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           client.close();
//         });
//     };
//     deleteAfter10M();
//   }
// });

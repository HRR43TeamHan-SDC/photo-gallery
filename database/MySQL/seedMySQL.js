const db = require('./index.js');

/*
Seeded MySQL with the script below so that I could stress test it for a base metric.
Exported 10M records from MySQL Workbench to CSV and JSON.

Seeded MongoDB with CSV file using the following command
  mongoimport --db=photoGallery --collection=photos --type=csv
  --headerline --file=photoGallery10000000.csv

Still researching second database, but most likely will choose PostgreSQL.

Included an alternative seeding script to meet the requirement.
(see ../data/csvGenerationScript.js)
*/

let counter = 0;
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = ['2017', '2018', '2019', '2020'];

const seed = () => {
  const params = [];

  for (let i = 0; i < 15; i += 1) {
    const boolean = Math.floor(Math.random() * 2);
    if (boolean) {
      params.push(`https://photo-gallery-service.s3.amazonaws.com/${Math.floor(Math.random() * 1000)}.jpeg`);
    } else {
      params.push(null);
    }
  }

  const date = `${month[Math.floor(Math.random() * 12)]} ${Math.ceil(Math.random() * 30)}, ${year[Math.floor(Math.random() * 4)]}`;
  params.push(date);

  db.query('INSERT INTO photos (image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params, (err) => {
    if (err) {
      console.log('error at database/seed.js INSERT INTO', err);
    } else {
      counter += 1;
      console.log(counter, 'rows have been inserted');
      if (counter < 10000000) {
        seed();
      } else {
        db.end(() => console.log('db connection has been ended'));
      }
    }
  });
};

seed();

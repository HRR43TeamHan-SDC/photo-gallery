const db = require('./index.js');

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
        db.end(() => 'db connection has been ended');
      }
    }
  });
};

seed();

const fs = require('fs');


let counter = 1;
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = ['2017', '2018', '2019', '2020'];

const generateData = () => {
  let data = `${counter},`;

  // create data for the columns of a single row
  for (let i = 0; i < 15; i += 1) {
    const boolean = Math.floor(Math.random() * 2);
    if (boolean) {
      data += `https://photo-gallery-service.s3.amazonaws.com/${Math.floor(Math.random() * 1000)}.jpeg` + ',';
    } else {
      data += 'null,';
    }
  }

  const date = `${month[Math.floor(Math.random() * 12)]} ${Math.ceil(Math.random() * 30)}-${year[Math.floor(Math.random() * 4)]}\n`;
  data += date;

  fs.writeFile('../../../../Downloads/csvGenerationScript.csv', data, {flag: 'a'}, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    counter % 5000 === 0 && console.log('row count:', counter);
    if (counter < 10000000) {
      counter++;
      generateData();
    } else {
      console.log('finished!');
    }
  });
};

const generateHeaders = () => {
  const data = 'id,image0,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,date\n';

  // create headers
  fs.writeFile('../../../../Downloads/csvGenerationScript.csv', data, (err) => {
    if (err) {
      console.error(err);
    } else {
      generateData();
    }
  });
};

generateHeaders();
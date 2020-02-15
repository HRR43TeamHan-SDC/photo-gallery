const fs = require('fs');


let counter = 1;
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = ['2017', '2018', '2019', '2020'];


const generateData = () => {
  let data = {
    id: counter
  };

  // create data for one record
  let imageNumber = 0;
  for (let i = 0; i < 15; i += 1) {
    const boolean = Math.floor(Math.random() * 2);
    if (boolean) {
      data[`image${imageNumber}`] = `https://photo-gallery-service.s3.amazonaws.com/${Math.floor(Math.random() * 1000)}.jpeg`;
      imageNumber += 1;
    } else {
      data[`image${imageNumber}`] = null;
      imageNumber +=1;
    }
  }

  data.date = `${month[Math.floor(Math.random() * 12)]} ${Math.ceil(Math.random() * 30)}, ${year[Math.floor(Math.random() * 4)]}`;

  if (counter === 1) {
    data = JSON.stringify(data, null, 2);
  } else {
    data = ',\n' + JSON.stringify(data, null, 2);
  }

  fs.writeFile('../../../../Downloads/jsonGenerationScript.json', data, {flag: 'a'}, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    if (counter < 10000000) {
      console.log('row count:', counter);
      counter++;
      generateData();
    } else {
      fs.writeFile('../../../../Downloads/jsonGenerationScript.json', ']', {flag: 'a'}, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('row count:', counter);
        console.log('finished!');
      });
    }
  });
};

fs.writeFile('../../../../Downloads/jsonGenerationScript.json', '[', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  generateData();
});

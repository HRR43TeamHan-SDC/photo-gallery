const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: '../../../../Downloads/csvWriterGenerationScript.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'image0', title: 'image0'},
    {id: 'image1', title: 'image1'},
    {id: 'image2', title: 'image2'},
    {id: 'image3', title: 'image3'},
    {id: 'image4', title: 'image4'},
    {id: 'image5', title: 'image5'},
    {id: 'image6', title: 'image6'},
    {id: 'image7', title: 'image7'},
    {id: 'image8', title: 'image8'},
    {id: 'image9', title: 'image9'},
    {id: 'image10', title: 'image10'},
    {id: 'image11', title: 'image11'},
    {id: 'image12', title: 'image12'},
    {id: 'image13', title: 'image13'},
    {id: 'image14', title: 'image14'},
    {id: 'date', title: 'date'},
  ]
});


let counter = 1;
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = ['2017', '2018', '2019', '2020'];

const generateData = () => {
  let data = [{
    id: counter
  }];

  // create data for one record
  let imageNumber = 0;
  for (let i = 0; i < 15; i += 1) {
    const boolean = Math.floor(Math.random() * 2);
    if (boolean) {
      data[0][`image${imageNumber}`] = `https://photo-gallery-service.s3.amazonaws.com/${Math.floor(Math.random() * 1000)}.jpeg`;
      imageNumber += 1;
    } else {
      data[0][`image${imageNumber}`] = null;
      imageNumber +=1;
    }
  }

  data[0].date = `${month[Math.floor(Math.random() * 12)]} ${Math.ceil(Math.random() * 30)}-${year[Math.floor(Math.random() * 4)]}`;

  csvWriter.writeRecords(data)
    .then(() => {
      console.log('row count:', counter);
      if (counter < 10000000) {
        counter += 1;
        generateData();
      } else {
        console.log('finished!');
      }
    })
    .catch((err) => console.error(err));
};

generateData();

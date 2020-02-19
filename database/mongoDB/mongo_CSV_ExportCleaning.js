const csv = require('csv-parser');
const fs = require('fs');


const readFile = '../../../../Downloads/mongoExport.csv';
const writeFile = '../../../../Downloads/cleanedMongoExport.csv';
const headers = 'id,image0,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,date\n';

fs.writeFile(writeFile, headers, (err) => {
  if (err) {
    console.error('error creating file', err);
  }
});

fs.createReadStream(readFile)
  .pipe(csv())
  .on('error', (err) => {
    console.error('error', err);
  })
  .on('data', (row) => {
    const image0 = row.image0 === 'null' || row.image0 === 'NULL' ? null : row.image0;
    const image1 = row.image1 === 'null' || row.image1 === 'NULL' ? null : row.image1;
    const image2 = row.image2 === 'null' || row.image2 === 'NULL' ? null : row.image2;
    const image3 = row.image3 === 'null' || row.image3 === 'NULL' ? null : row.image3;
    const image4 = row.image4 === 'null' || row.image4 === 'NULL' ? null : row.image4;
    const image5 = row.image5 === 'null' || row.image5 === 'NULL' ? null : row.image5;
    const image6 = row.image6 === 'null' || row.image6 === 'NULL' ? null : row.image6;
    const image7 = row.image7 === 'null' || row.image7 === 'NULL' ? null : row.image7;
    const image8 = row.image8 === 'null' || row.image8 === 'NULL' ? null : row.image8;
    const image9 = row.image9 === 'null' || row.image9 === 'NULL' ? null : row.image9;
    const image10 = row.image10 === 'null' || row.image10 === 'NULL' ? null : row.image10;
    const image11 = row.image11 === 'null' || row.image11 === 'NULL' ? null : row.image11;
    const image12 = row.image12 === 'null' || row.image12 === 'NULL' ? null : row.image12;
    const image13 = row.image13 === 'null' || row.image13 === 'NULL' ? null : row.image13;
    const image14 = row.image14 === 'null' || row.image14 === 'NULL' ? null : row.image14;


    const str = `${+row.id},${image0},${image1},${image2},${image3},${image4},${image5},${image6},${image7},${image8},${image9},${image10},${image11},${image12},${image13},${image14},${row.date}\n`;

    fs.appendFile(writeFile, str, (err) => {
      if (err) {
        console.error('error writing file', err);
      } else if (+row.id % 100000 === 0) {
        console.log('row written', row.id);
      }
    });
  })
  .on('end', () => {
    console.log('transformation complete!');
  });

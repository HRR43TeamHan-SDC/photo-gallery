// import React, { useState, useEffect } from 'react';
import React from 'react';
import Photos from './Photos.jsx';

// function App() {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     // const queryString = window.location.search;
//     // const urlParams = new URLSearchParams(queryString);
//     // const id = urlParams.get('id');
//     axios.get(`http://localhost:3009/api/photos/${id}`)
//       .then((response) => {
//         setPhotos(response.data);
//       })
//       .catch((error) => {
//         console.log('error in axios get', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>
//         {photos.length}
//         {' '}
//         Photos
//       </h1>
//       <Photos photos={photos} />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      date: '',
    };
  }

  componentDidMount() {
    const url = window.location.pathname.split('/');
    const id = url[1];
    fetch(`/api/photos/${id}`)
      .then((res) => res.json())
      .then((response) => {
        const {
          image0,
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          image7,
          image8,
          image9,
          image10,
          image11,
          image12,
          image13,
          image14,
        } = response[0];
        const photosArr = [
          image0,
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          image7,
          image8,
          image9,
          image10,
          image11,
          image12,
          image13,
          image14,
        ];

        const photos = photosArr.filter((photo) => photo !== 'null');
        const date = response[0].date.replace(/-/, ', ');

        this.setState({ photos, date });
      })
      .catch((error) => {
        console.log('error in axios get', error);
      });
  }

  render() {
    const { photos, date } = this.state;
    return (
      <div>
        <h1>
          {photos.length}
          {' '}
          Photos
        </h1>
        <Photos photos={photos} date={date} />
      </div>
    );
  }
}

export default App;

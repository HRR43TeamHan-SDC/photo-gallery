/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import '../public/styles.css';

function Photos({ photos, date }) {
  const [selectedPicture, setSelectedPicture] = useState(0);
  const [showPicture, setShowPicture] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const classList = ['img1', 'img1', 'img2', 'img3', 'img3', 'img3', 'img3', 'img3', 'img3'];

  const handleClick = (index) => {
    setSelectedPicture(index);
    setShowPicture(true);
  };

  const closePhoto = () => {
    setShowPicture(false);
  };

  const nextPhoto = (e) => {
    if ((e.key === 'Enter' || e.key === ' ' || e.type === 'click') && (selectedPicture < photos.length - 1)) {
      e.preventDefault();
      setSelectedPicture(selectedPicture + 1);
    }
  };

  const prevPhoto = (e) => {
    if ((e.key === 'Enter' || e.key === ' ' || e.type === 'click') && (selectedPicture !== 0)) {
      e.preventDefault();
      setSelectedPicture(selectedPicture - 1);
    }
  };

  const handleFlag = () => {
    setShowReport(true);
    console.log('flag clicked');
  };

  const closeReport = () => {
    setShowReport(false);
  };

  const photoList = photos.map((photo, index) => {
    if (index < 9) {
      return (
        <img
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          tabIndex="0"
          onClick={handleClick.bind(this, index)}
          onKeyPress={handleClick.bind(this, index)}
          title="Restaurant, City, State"
          className={`img ${classList[index]}`}
          key={photo}
          src={photo}
          alt="Smiley face"
        />
      );
    }
    return null;
  });

  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="pictures">
      <div className="flex-container">
        {photoList}
        <button
          type="button"
          className="gallery-more"
          onClick={handleClick.bind(this, 8)}
        >
          +
          {photos.length - 9}
          {' '}
          more
        </button>
        <div className={`show-picture${showPicture ? '' : ' hide-picture'}`}>
          <div
            id="left-arrow"
            className={selectedPicture === 0 ? 'disabled' : ''}
            onClick={prevPhoto}
            onKeyPress={prevPhoto}
            role="button"
            tabIndex="0"
          >
            &gt;
          </div>
          <div>
            <div>
              <img className="img4" src={photos[selectedPicture]} alt="hello" />
              <div className={showReport ? 'show-report' : 'hide-report'}>
                <h4>  Report a photo problem</h4>
                <button onClick={closeReport} className="report-button" type="button">Unrelated to restaurant</button>
                <button onClick={closeReport} className="report-button" type="button">Inappropriate content</button>
                <button onClick={closeReport} className="report-button" type="button">I don&apos;t like this photo</button>
                <button onClick={closeReport} id="cancel-button" type="button">Cancel</button>
              </div>
            </div>
            <div className="footer">
              <div className="footer-text">
                <div className="circle-image">
                  <svg height="50" width="50">
                    <circle cx="25" cy="25" fill="#56D7D9" r="25" />
                    <text dy="10%" fill="white" fontFamily="Arial" fontSize="15px" textAnchor="middle" x="50%" y="50%">OT</text>
                  </svg>
                </div>
                <div className="diner-text">
                  <div>
                    <strong>
                      OpenTable Diner
                    </strong>
                  </div>
                  <div className="dined-on">
                    Dined on
                    {' '}
                    {date}
                  </div>
                </div>
                <div
                  className="flag"
                  onClick={handleFlag}
                  onKeyPress={handleFlag}
                  role="button"
                  tabIndex="0"
                >
                  {/* flag found at https://fontawesome.com/license */}
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="flag" className="svg-inline--fa fa-flag fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#fff" d="M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            id="right-arrow"
            role="button"
            tabIndex={photos.length}
            className={selectedPicture === photos.length - 1 ? 'disabled' : ''}
            onClick={nextPhoto}
            onKeyPress={nextPhoto}
          >
            &gt;
          </div>
          <div
            id="close-picture"
            onClick={closePhoto}
            onKeyPress={closePhoto}
            role="button"
            tabIndex={photos.length + 1}
          >
            x
          </div>
        </div>
      </div>
    </div>
  );
}

Photos.defaultProps = {
  photos: [],
  date: '',
};

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
};

export default Photos;

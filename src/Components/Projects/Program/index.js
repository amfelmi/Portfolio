// Program.js
import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Program = (props) => {
  const { idx, title, video } = props;
  return (
    <div className='Program-container'>
      <div className='Program-info'>
        <h2 className='Program-title'>{idx}: {title}</h2>
        <ul className='Program-description'>
            <li className='Program-description-item'>A content-based recommendation system using RAWG API and 
                user interactions for personalised suggestions</li>
            <li className='Program-description-item'>Responsive design with an intuitive search bar for seamless game discovery.</li>
            <li className='Program-description-item'>Registration system ensures secure authentication with 
                bcrypt password hashing and cookie creation.</li>
            <li className='Program-description-item'>List management system allows users to organize 
                and personalize their game preferences.</li>
            <li className='Program-description-item'>Utilizes RESTful API principles for 
                efficient communication between frontend and backend.</li>
        </ul>
      </div>
      <div className='Program-video'>
        <div className='technologies'>
            <div className='technology-items'><h1>React</h1></div>
            <div className='technology-items'><h1>Express.js</h1></div>
            <div className='technology-items'><h1>Python</h1></div>
            <div className='technology-items'><h1>MySQL</h1></div>
        </div>
        <video
          id='mygamelistvideo'
          controls
          autoPlay
          muted={true}
          loop={true}
        >
          <source src={video} type='video/mp4' />
          <source src={video} type='video/ogg' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

Program.propTypes = {
  idx: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

export default Program;

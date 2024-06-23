// Program.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ReactCardFlip from 'react-card-flip';

const Program = (props) => {
  const { idx, title, img, video, tech1, tech2, tech3, tech4, point1, point2, point3, point4, point5, point6 } = props;
  const technologies = [tech1, tech2, tech3, tech4].filter(Boolean); // Filter out any undefined or null values
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard(){
    setIsFlipped(!isFlipped);
  }

  return (
    <div className='Program-container'>
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <div className='front'>
        <div className='Program-info'>
        <h2 className='File-title'>{idx}: {title}</h2>
        <ul className='Program-description'>
            <li className='Program-description-item'>{point1}</li>
            <li className='Program-description-item'>{point2}</li>
            <li className='Program-description-item'>{point3}</li>
            <li className='Program-description-item'>{point4}</li>
            <li className='Program-description-item'>{point5}</li>
            <li className='Program-description-item'>{point6}</li>
        </ul>
      </div>
      <div className='Program-img'>
        <div className='technologies' style={{ gridTemplateColumns: `repeat(${technologies.length}, 1fr)` }}>
        {technologies.map((tech, index) => (
            <div key={index} className='technology-items'>
              <h1>{tech}</h1>
            </div>
          ))}
        </div>
        <img id='mygamelistimg' src={img} alt='My Game List Website'/>
      </div>
      <h1 className='program-title'>{title}</h1>
      <button onClick={flipCard} className='show-more-btn'>More Detail</button>
      </div>
      <div className='back'>
      {video ? (
            <video
              id='program-video'
              controls
              muted={true}
            >
              <source src={video} type='video/mp4' />
              <source src={video} type='video/ogg' />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className='no-video-placeholder'>
              <h1>A video here would cause an inception. <br/>
              So instead, have fun exploring the site!</h1>
            </div>
          )}
        <button onClick={flipCard} className='flip-back-btn'>Flip Back</button>
      </div>
      </ReactCardFlip>
      
    </div>
  );
};

Program.propTypes = {
  idx: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tech1: PropTypes.string,
  tech2: PropTypes.string,
  tech3: PropTypes.string,
  tech4: PropTypes.string,
};

export default Program;

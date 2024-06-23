// Program.js
import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Program = (props) => {
  const { idx, title, img, tech1, tech2, tech3, tech4 } = props;
  const technologies = [tech1, tech2, tech3, tech4].filter(Boolean); // Filter out any undefined or null values

  return (
    <div className='Program-container'>
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
      <button className='show-more-btn'><a className='program-link' href={idx}>More Detail</a></button>
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

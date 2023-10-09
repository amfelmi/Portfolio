import './index.scss'
import React from 'react'
import Photo from '../../../assets/images/portfolio picture.jpg'

const About = ({ isActivated }) => {
  return (
    <div className={`screen ${isActivated ? 'activated' : 'deactivated'}`}>
      <div className='screen-container'>
        <div className='screen-image-container'>
          <img src={Photo} className='photo' />
        </div>
        <div className='screen-info-container' >
          <p className='greeting'>
          <span className='rotate'>👋</span> Hello, I'm Abdulmajid Elmi!
          </p>
          <p className='paragraph'>
            🎓 With a background in <span className='highlight'> Chemical Engineering </span>, I navigated the world of software in the field, sparking my transition to technology.
          </p>
          <p className='paragraph'>
            💻 I earned an <span className='highlight'>MSc in Computer Science </span> from the University of Birmingham. Using <span className='highlight'>Java and React </span>, I'm currently working on my full stack development.
          </p>
          <p className='paragraph'>
            💡 Actively exploring <span className='highlight'>Cloud Computing </span> through Azure, I bring a unique perspective shaped by my experiences in both engineering and technology.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

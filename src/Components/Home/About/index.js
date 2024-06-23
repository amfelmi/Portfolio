import './index.scss'
import React from 'react'
import Photo from '../../../assets/images/portfolio picture.jpg'

const About = ({ isActivated }) => {
  const isMobile = window.innerWidth <= 767;

  return (
    <div id="about" className={`screen ${isActivated ? 'activated' : 'deactivated'}`}>
      <div className='screen-container'>
        { isMobile && <h1 className='about-title'>{'<About>'}</h1> }
        <div className='screen-image-container'>
          <img src={Photo} alt='Abdulmajid' className='photo' />
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
          <p className='paragraph'>
          ⚽ I love watching and playing  football and am a avid supporter of Arsenal FC. Alongside this, I love to edit 🎥, code 👨🏾‍💻 and play video games! 🎮
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

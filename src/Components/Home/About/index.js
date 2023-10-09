import './index.scss'
import React from 'react'
import Photo from '../../../assets/images/portfolio picture.jpg'

const About = ({ isActivated }) => {
  return (
    <div className={`screen ${isActivated ? 'activated' : 'deactivated'}`}>
      <div className='screen-container'>
        <div className='screen-image-container'>
      <img  src={Photo} className='photo' />
      </div>
      <div className='screen-info-container' >
      THIS IS ABOUT PAGE!
      </div>
      </div>
    </div>
  )
}

export default About

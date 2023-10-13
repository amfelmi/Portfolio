import React from 'react'
import './index.scss'
import { Link } from 'react-scroll'
import Program from './Program'
import mygamelist from '../../assets/videos/my game list website.mp4'


const Projects = () => {
  return (
    <div id="projects">
      <h1 className='section-title'>{'< Projects >'}</h1>
      <div className='project-container'>
        <Program idx="File-01" title="MyGameList" video={mygamelist} />
      </div>
      <p className='note'>Note: More projects will be displayed after the pages are coded and integrated into the main branch! For now, they are a part of my resume.
        <br /><Link
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a className='temp-link'>Contact me</a>
        </Link> to receive my CV or check out my <a className='temp-link' href='https://github.com/amfelmi' target="_blank"> Github</a> repositories!
      </p>
      <h1 className='section-title'>{'< /Projects >'}</h1>
    </div>
  )
}

export default Projects

import React from 'react'
import './index.scss'
import { Link } from 'react-scroll'
import Program from './Program'
import mygamelistvideo from '../../assets/videos/my game list website.mp4'
// import mygamelist from '../../assets/images/mgl page 1.png'
// import mygamelist from '../../assets/images/mgl page 2.png'
import mygamelist from '../../assets/images/mgl landing page.png'
import portfolio from '../../assets/images/portfolio page.png'


const Projects = () => {
  return (
    <div id="projects">
      <h1 className='section-title'>{'< Projects >'}</h1>
      <div className='project-container'>
        <Program 
        idx="file-01" 
        title="MyGameList" 
        img={mygamelist}
        tech1={"React"} 
        tech2={"ExpressJs"} 
        tech3={"Python"} 
        tech4={"MySQL"} 
        />
        <Program 
        idx="file-02" 
        title="Portfolio" 
        img={portfolio} 
        tech1={"React"} 
        tech2={"SCSS"} 
        
        />
        <Program 
        idx="file-03" 
        title="Portfolio" 
        img={portfolio} 
        />
        <Program idx="File-04" title="Portfolio" img={portfolio} />
      </div>
      {/* <p className='note'>Note: More projects will be displayed after the pages are coded and integrated into the main branch! For now, they are a part of my resume.
        <br /><Link
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a className='temp-link'>Contact me</a>
        </Link> to receive my CV or check out my <a className='temp-link' href='https://github.com/amfelmi' target="_blank"> Github</a> repositories!
      </p> */}
      <h1 className='section-title'>{'< /Projects >'}</h1>
    </div>
  )
}

export default Projects

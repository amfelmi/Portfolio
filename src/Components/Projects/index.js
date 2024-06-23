import React from 'react'
import './index.scss'
import { Link } from 'react-scroll'
import Program from './Program'
import mygamelistvideo from '../../assets/videos/my game list website.mp4'
import pokemonvideo from '../../assets/videos/terminal pokemon.mp4'
// import mygamelist from '../../assets/images/mgl page 1.png'
// import mygamelist from '../../assets/images/mgl page 2.png'
import mygamelist from '../../assets/images/mgl landing page.png'
import portfolio from '../../assets/images/portfolio page.png'
import pokemon from '../../assets/images/terminal_pokemon.png'


const Projects = () => {
  return (
    <div id="projects">
      <h1 className='section-title'>{'< Projects >'}</h1>
      <div className='project-container'>
        <Program 
        idx={"File-01"}
        title={"MyGameList"}
        img={mygamelist}
        video={mygamelistvideo}
        tech1={"React"} 
        tech2={"ExpressJs"} 
        tech3={"Python"} 
        tech4={"MySQL"} 
        point1={"My Masters dissertation project."}
        point2={"Created a content-based recommendation system in python which used RAWG API."}
        point3={"Also user interaction is used to produced personalised results."}
        point4={"An Express.Js registration system which had features such as bcrypt password hashing and cookie creation."}
        point5={"Created a list management system by designing my relational database to have unique ID, to create lists for users."}
        point6={"Utilizes RESTful API communication between frontend and backend."}
        />
        <Program 
        idx="File-02" 
        title="Terminal Pokemon" 
        img={pokemon}
        video={pokemonvideo}
        tech1={"Java"}
        tech2={"OOP Priciples"}
        point1={"Fun OOP preactice project"}
        point2={"Created a turn-based Pokemon game."}
        point3={"Player vs CPU, where Player can choose their Pokemon"}
        point4={"Abstraction and Inheritence to reuse code, to easily create more Pokemon"}
        point5={"Used the actual algorithm to calculate damage."}
        point6={"Clone from GitHub to give it a try!"}
        />
        <Program 
        idx="File-03" 
        title="Portfolio" 
        img={portfolio} 
        tech1={"React"} 
        tech2={"SCSS"} 
        point1={"This website itself!"}
        point2={"A cyberpunk inspired theme with respect to cyberpunk 2077"}
        point3={"Used Props to make this projects section, to add more projects easily."}
        point4={"Coded my own animations including Glyph and Scroller. Can be accessed in my GitHub"}
        point5={"Implemented responsive design for optimal viewing across various devices."}
        point6={"Refactored from a multi-page setup to a single-page application (SPA) for improved performance and navigation."}
        />
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

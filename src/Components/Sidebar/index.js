import { Link } from 'react-scroll';
import './index.scss'
import React from 'react'
import LogoA from './../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faHome, faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faReact, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className='navbar'>
      <Link
        className='logo'
        to="home"
        smooth={true}
        offset={-70}
        duration={500}>
        <img src={LogoA} alt='logo' />
      </Link>
      <nav>
        <Link
          activeclassname="active"
          to="home"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </Link>
        {/* <Link 
        activeclassname="active" 
        className="about-link" 
        to="about"
        smooth={true}
        offset={-70}
        duration={500}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link> */}
        <Link
          activeclassname="active"
          className="project-link"
          to="projects"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
        </Link>
        <Link
          activeclassname="active"
          className="contact-link"
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
      </nav>
      <ul>
        <li>
          <a
            target='"_blank'
            rel='noreferrer'
            href='https://github.com/amfelmi/Portfolio' /* Change the link to this into gmail */
          >
            <FontAwesomeIcon icon={faReact} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target='"_blank'
            rel='noreferrer'
            href='https://github.com/amfelmi'
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target='"_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/abdulmajid-elmi-0a199b179/'
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      {/* <div className='mobile_btn'>
        <FontAwesomeIcon icon={faBars} color='#4d4d4e' />
      </div> */}
    </div>
  )
}

export default Sidebar

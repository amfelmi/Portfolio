import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React from 'react'
import LogoA from './../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className='navbar'>
      <Link className='logo' to="/">
      <img src={LogoA} alt='logo'/>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a 
          target='"_blank' 
          rel='noreferrer' 
          href='https://www.linkedin.com/in/abdulmajid-elmi-0a199b179/' /* Change the link to this into gmail */
          >
            <FontAwesomeIcon icon={faGoogle} color="#4d4d4e" />
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

    </div>
  )
}

export default Sidebar

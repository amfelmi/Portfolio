import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import LogoTitleA from '../../assets/images/logo-letter-a.png';
import LogoTitleE from '../../assets/images/logo-letter-e.png';
import AnimatedLetters from '../AnimatedLetter';
import Launcher from './Launcher';
import DecodeAnimation from '../DecodeAnimation';
import About from './About';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [letterClassTwo, setLetterClassTwo] = useState('text-decoder')
  const [activated, setActivated] = useState(false) 

  const nameArray = ['B', 'D', 'U', 'L', 'M', 'A', 'J', 'I', 'D']
  const surnameArray = ['L', 'M', 'I']
  const jobArray = ['W', 'e', 'b', " ", 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  const jobArray_2 = ['J', 'a', 'v', 'a', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
      setLetterClassTwo('text-animate-hover')
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleActivationStatus = (() => {
    if (activated) {
        setActivated(false);
    } else {
      setActivated(true);
    }
  })

  return (
    <div className='container home-page'>
      <button onClick={handleActivationStatus} className={`activator ${activated ? 'about-active' : 'about-inactive'}`}>
      {activated ? '>' : '<'}
        </button>
      <a className='scroller' href='about'></a>
      <Launcher />
      <div className='text-zone'>
        <h1>
          <img className='logo-title-A' src={LogoTitleA} alt='developer' />
          <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={35}
          />
          <img className='logo-title-E' src={LogoTitleE} alt='developer' />
          <AnimatedLetters letterClass={letterClass}
            strArray={surnameArray}
            idx={43}
          />
        </h1>
        <h2><DecodeAnimation letterClass={letterClassTwo}
            strArray={jobArray}
          /> | <DecodeAnimation letterClass={letterClassTwo}
          strArray={jobArray_2}
        /></h2>
      </div>
         <About isActivated={activated} />
    </div>
  )
}

export default Home

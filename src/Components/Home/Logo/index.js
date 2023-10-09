import './index.scss'
import React from 'react'
import LogoA from '../../../assets/images/logo-letter-a.png'

const Logo = () => {
  return (
    <>
      <svg class="filter">
      <filter id="alphaRed">
        <feColorMatrix mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
      </filter>
      <filter id="alphaGreen">
        <feColorMatrix mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
      </filter>
      <filter id="alphaBlue">
        <feColorMatrix mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="joint" />
      </filter>
      <filter id="alpha">
        <feColorMatrix type="saturate" values="0"/>
      </filter>
    </svg>
    <div className='imgWrap'>
      <img className='red' src={LogoA} alt="A"/>
      <img className='green' src={LogoA} alt="A"/>
      <img className='blue' src={LogoA} alt="A"/>
      </div>
    </>
  )
}

export default Logo

import Logo from "../Logo"
import "./index.scss"

import React from 'react'

const Launcher = () => {
  return (
    <div className="launcher-page">
      <div className="launcher-image-container">
        <Logo />
        </div>
        <div className="launcher-text-container">
        <header className="text">CESS GRANTED</header>
      </div>
    </div>
  )
}

export default Launcher

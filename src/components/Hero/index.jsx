import React from 'react'
import * as FaIcons from 'react-icons/fa'
import './styles.css'
function HeroSection() {
  return (
   <header class="header content">
    <div class="header-video">
   
    <video src="res/3D 2/CUARTO EMBRUJADO/juego rayuela.mp4" autoPlay loop muted></video>
     
    </div>
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1>"Cada paso que damos nos lleva a un objetivo"</h1>
      
      <a href="#portfolio" > Desliza <FaIcons.FaArrowDown/></a>
    </div>
  </header>
  )
}

export default HeroSection

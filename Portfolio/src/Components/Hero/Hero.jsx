import React from 'react'
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'


import my from "../../assets/my.jpg"

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={my} alt="Profile" />
        <h1><span>I'm Dumindu Pabasara,</span></h1><h2> full stack developer and UI/UX designer based in Sri Lanka</h2>
        <p>Passionate Full Stack Developer and UI/UX Designer with over a year of experience in graphic design. Skilled in building intuitive, high-performing web applications and creating visually engaging user experiences that blend creativity with functionality.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
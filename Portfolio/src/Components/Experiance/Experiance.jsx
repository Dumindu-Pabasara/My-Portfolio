import React from 'react'
import "./Experiance.css"
import theme_pattern from "../../assets/theme_pattern.svg"

const Experiance = () => {
  return (
    <div id='skills' className='experiance'>
      <div className="experiance-tittle">
        <h1>My Experience</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="experiance-section">
        <div className="experiance-line">
          <a href="https://www.figma.com/design/GmeGXTpHFZWZ5S2QOyQmq6/MUVE?node-id=0-1&t=SJ0enfXx3DtKjE7m-1" target="_blank" rel="noopener noreferrer" className="experiance-item">
            <h2>01</h2>
            <h1>UI / UX Design</h1>
            <p>Creating intuitive and engaging interfaces that deliver seamless user experiences.</p>
          </a>
          <a href="https://www.facebook.com/share/1BYQ4H2y8n/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="experiance-item">
            <h2>02</h2>
            <h1>Graphic Design</h1>
            <p>Transforming ideas into stunning visuals through creative and strategic design.</p>
          </a>
          <a href="https://github.com/Dumindu-Pabasara/Hotel_Web.git" target="_blank" rel="noopener noreferrer" className="experiance-item">
            <h2>03</h2>
            <h1>Front End Development</h1>
            <p>Building responsive, interactive, and visually appealing user interfaces.</p>
          </a>
        </div>

        <div className="experiance-line">
          <a href="https://github.com/Dumindu-Pabasara/Hotel_Management_System.git" target="_blank" rel="noopener noreferrer" className="experiance-item">
            <h2>04</h2>
            <h1>Back End Development</h1>
            <p>Developing secure, efficient, and scalable server-side solutions.</p>
          </a>
          <a href="https://www.facebook.com/share/1BYQ4H2y8n/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="experiance-item">
            <h2>05</h2>
            <h1>Social Media</h1>
            <p>Designing engaging content and strategies to boost online presence.</p>
          </a>
          <a href="https://www.facebook.com/share/1BYQ4H2y8n/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="experiance-item">
            <h2>06</h2>
            <h1>Digital Marketing</h1>
            <p>Crafting digital strategies that connect brands with their audiences effectively.</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Experiance

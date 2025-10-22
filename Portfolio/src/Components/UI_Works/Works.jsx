import React from 'react'
import './Works.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'

const Works = () => {
  return (
    <div id='projects' className="works">
      <div className="works-tittle">
        <h1>My UI Projects</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>

      <div className="works-container">
        {mywork_data.map((work, index) => (
          <a 
            key={index}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={work.w_img} alt= {work.w_name} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Works

import React from 'react'
import './Development.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data2 from '../../assets/mywork_data2.js'

const Development = () => {
  return (
    <div className='development'>
        <div className="development-tittle">
            <h1>My Development Projects</h1>
            <img src={theme_pattern} alt="Theme pattern" />   
        </div>
        <div className="development-section">
            {mywork_data2.map((work, index) => (
            <a 
                key={index}
                href={work.w_link}
                target="_blank"
                rel="noopener noreferrer"
            >
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
        </div>

    </div>
  )
}

export default Development
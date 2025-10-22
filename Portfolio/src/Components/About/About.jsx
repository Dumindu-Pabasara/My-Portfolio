import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import my_full from "../../assets/my_full.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-tittle">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="Theme Pattern" />
        </div>
        <div className="about-section">   
            <div className="about-left">
                <img src={my_full} alt="Profile" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>   
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Node js</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div> 
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>B.Sc(Hons)in Computing & Information Systems</h1>
                <p>Sabaragamuwa University of Sri Lanka</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>Diploma in Software Engineering (NIBM)</h1>
                <p>1st Class</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>G.C.E. Advanced Level Maths Stream</h1>
                <p>BBC</p>
            </div>
        </div>
    </div>
  )
}

export default About
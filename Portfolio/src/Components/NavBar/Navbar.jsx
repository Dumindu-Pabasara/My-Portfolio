// ...existing code...
import React, { useState, useRef } from 'react'
import "./Navbar.css"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {

  const [menu,setMenu] = useState("home")
  const menuRef = useRef(null);

  const openMenu = () => {
    if (!menuRef.current) return;
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    if (!menuRef.current) return;
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      <h2>Dumindu</h2>
      <img src={menu_open} onClick={openMenu} alt="Menu Open" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="Menu Close" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link'  href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ?<img src={underline} alt="" />:null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ?<img src={underline} alt="" />:null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#skills"><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink>{menu === "skills" ?<img src={underline} alt="" />:null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#projects"><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink>{menu === "projects" ?<img src={underline} alt="" />:null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ?<img src={underline} alt="" />:null}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
// ...existing code...
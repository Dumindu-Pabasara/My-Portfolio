import React from 'react'
import Navbar from './Components/NavBar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Experiance from './Components/Experiance/Experiance.jsx'
import UI_Works from './Components/UI_Works/Works.jsx'
import Development from './Components/Development_works/Development.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiance />
      <UI_Works />
      <Development />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
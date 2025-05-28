import React, { useState, useEffect } from 'react'
import { Element } from 'react-scroll'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-dark-800 text-white">
      <Navbar />
      
      <Element name="home">
        <Header />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="timeline">
        <Timeline />
      </Element>
      
      <Element name="projects">
        <Projects />
      </Element>
      
      <Element name="skills">
        <Skills />
      </Element>
      
      <Element name="contact">
        <Contact />
      </Element>
      
      <Footer />
    </div>
  )
}

export default App
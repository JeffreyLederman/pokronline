import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Resume from './components/Resume'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Hello, I'm a Student Developer</h1>
              <p className="hero-subtitle">
                Passionate about creating innovative solutions and learning new technologies
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn">View My Work</a>
                <a href="#contact" className="btn btn-outline">Get In Touch</a>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App


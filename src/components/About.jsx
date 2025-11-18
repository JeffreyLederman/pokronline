import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Learn more about my background, interests, and what drives me
        </p>
        <div className="about-content">
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


import React from 'react'
import './Resume.css'

function Resume() {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Company Name',
      period: 'Summer 2023 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
      title: 'Research Assistant',
      company: 'University Lab',
      period: 'Fall 2022 - Spring 2023',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2021 - 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Relevant coursework includes Data Structures, Algorithms, Software Engineering, and Database Systems.'
    }
  ]

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          My educational background and professional experience
        </p>
        <div className="resume-content">
          <div className="resume-section-content">
            <h3 className="resume-subtitle">Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.title}</h4>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-period">{exp.period}</p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="resume-section-content">
            <h3 className="resume-subtitle">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <p className="timeline-company">{edu.school}</p>
                    <p className="timeline-period">{edu.period}</p>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="resume-download">
          <a href="#" className="btn" download>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume


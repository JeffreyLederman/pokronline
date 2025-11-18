import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
      technologies: ['JavaScript', 'Express', 'MySQL'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      technologies: ['Vue.js', 'Firebase', 'TypeScript'],
      link: '#',
      github: '#'
    },
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A collection of projects I've worked on, showcasing my skills and experience
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


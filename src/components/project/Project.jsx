import React from 'react'
import './project.css'

const Project = ({ title, description, demoLink, githubLink }) => {
  return (
    <div className='eh__project'>

      <div className='eh__project-title'>
        <p>{title}</p>
      </div>

      <div className='eh__project-description'>
        <p>{description}</p>
      </div>

      <div className='eh__project-links'>
        <a
          href={demoLink}
          target='blank'
        >
        View Demo
        </a> | <a
          href={githubLink}
          target='blank'
        >
        View on Github
        </a>
      </div>

    </div>
  )
}

export default Project
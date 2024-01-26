import React from 'react'
import './projects.css'

const Projects = ({ setShowProjects }) => {
  return (
    <div className='eh__projects section__padding'>
      <div className='eh__projects-content'>
        This should smoothly transition in.
        <button type='button' onClick={() => setShowProjects(false)}>Back</button>
      </div>
    </div>
  )
}

export default Projects
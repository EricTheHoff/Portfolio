import React, { useState } from 'react'
import Projects from '../projects/Projects.jsx'
import widImage from '../../assets/widImage.svg'
import './wid.css'

const WID = () => {
  const [showProjects, setShowProjects] = useState(false)

  return (
    // show-projects adjusts the border of eh__wid to encompass the contents of eh__projects.
    <div className={`eh__wid section__padding${showProjects ? ' show-projects' : ''}`} id='wid'>
      <div className={`eh__wid-before${showProjects ? ' transition-out' : ''}`}>

        <div className='eh__wid-image'>
          <img src={widImage} alt='Logos'/>
        </div>

        <div className='eh__wid-text'>
          <div className='eh__wid-text__content'>
            <h1>What I Do</h1>
            <p>I create full-stack web applications and sites with JavaScript, HTML, and CSS.
              I'm experienced with the PERN stack, having built multiple projects using PostgreSQL,
              Express, React, and Node.js.
              Interested in seeing some of my work? Click the button below to see more!
            </p>
            <div className='eh__wid-btn'>
              <button type='button' onClick={() => setShowProjects(true)}>My Work</button>
            </div>
            <h2>{`<Custom Front End Solutions/>`}<br/>
                {`<Full Stack Projects/>`}
            </h2>
          </div>
          <div className='eh__wid-text__bar'></div>
        </div>

      </div>

      <div className={`eh__wid-after${showProjects ? ' transition-in' : ''}`}>
        <Projects
          setShowProjects={setShowProjects}
        />
      </div>
      
    </div>
  )
}

export default WID
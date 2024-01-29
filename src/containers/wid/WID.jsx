import React, { useState, useEffect } from 'react'
import Projects from '../projects/Projects.jsx'
import widImage from '../../assets/widImage.svg'
import './wid.css'

const WID = () => {
  const [showProjects, setShowProjects] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  // useEffect hook to determine the screensize of the viewing device. Using the screensize to dynamically assign CSS classes for .eh__wid border management.
  useEffect(() => {
    const screenResize = () => {
      setWidth(window.innerWidth)
    }
    // Event listener for when the screen is resized.
    window.addEventListener('resize', screenResize)

    return () => {
      // Cleanup event listener to prevent memory leakage.
      window.removeEventListener('resize', screenResize)
    }
  },[])

  return (
    <div className={`eh__wid section__padding ${width <= 700 && showProjects ? 'mobile' : ''}`} id='wid'>
      <div className={`eh__wid-before ${showProjects ? 'transition-out' : ''}`}>

        <div className='eh__wid-image'>
          <img src={widImage} alt='placeholder'/>
        </div>

        <div className='eh__wid-text'>
          <div className='eh__wid-text__content'>
            <h1>What I Do</h1>
            <p>I create full-stack web applications and sites with JavaScript, HTML, and CSS,
              and I have experience in multiple frameworks, including React and Express. I've also
              utilized PostgreSQL for database management on previous projects.
              Interested in seeing some of my work? Click the button to see more!
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

      <div className={`eh__wid-after ${showProjects ? 'transition-in' : ''}`}>
        <Projects
          setShowProjects={setShowProjects}
        />
      </div>
      
    </div>
  )
}

export default WID
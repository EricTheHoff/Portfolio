import React, { useState } from 'react'
import './header.css'
import widImage from '../../assets/widImage.svg'
import Projects from '../projects/Projects.jsx'

const Header = () => {
  const [fade, setFade] = useState(false)

  return (
    <div className='container section__padding'>

      <div className={`before ${fade ? 'fade-out' : ''}`}>
        <div className='before-image'>
          <img src={widImage} alt='placeholder'/>
        </div>

        <div className='before-text'>

          <div className='before-text-content'>
            <h1>Testing Animations</h1>
            <p>I create full-stack web applications and sites with JavaScript, HTML, and CSS,
              and I have experience in multiple frameworks, including React and Express. I've also
              utilized PostgreSQL for database management on previous projects.
              Interested in seeing some of my work? Click the button to see more!
            </p>
            <div className='before-button'>
              <button onClick={() => setFade(true)}>Slide</button>
            </div>
            <h2>{`<Custom Front End Solutions/>`}<br/>
                {`<Full Stack Projects/>`}
            </h2>
          </div>

          <div className='before-bar'></div>

        </div>
      </div>

      <div className={`after ${fade ? 'fade-in' : ''}`}>
        <Projects
          setFade={setFade}
        />
      </div>

    </div>
  )
}

export default Header
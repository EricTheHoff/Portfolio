import React, { useState } from 'react'
import './header.css'

const Header = () => {
  const [flip, setFlip] = useState(false)

  const onClick = () => setFlip(!flip)

  return (
    <div className={`container section__padding ${flip ? 'flip' : ''}`}>
      <div className='card before'>
        <div className='before-text'>
          <div className='before-text-content'>
            <h1>What I Do</h1>
              <p>I create full-stack web applications and sites with JavaScript, HTML, and CSS,
                and I have experience in multiple frameworks, including React and Express. I've also
                utilized PostgreSQL for database management on previous projects.
                Interested in seeing some of my work? Click the button to see more!
              </p>

              <button onClick={onClick}>Press Me to Flip</button>
          </div>
        </div>
      </div>

      <div className='card after'>
        <div className='after-text'>
          <div className='after-text-content'>
            <h1>Post Flip Text</h1>
              <p>You should only see this text after a flip animation has occurred.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
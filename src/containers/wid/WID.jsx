import React from 'react'
import widImage from '../../assets/widImage.svg'
import './wid.css'

const WID = () => {
  return (
    <div className='eh__wid section__padding' id='wid'>

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
            <button type='button' onClick={() => alert(`Button Clicked`)}>My Work</button>
          </div>
          <h2>{`<Custom Front End Solutions/>`}<br/>
              {`<Full Stack Projects/>`}
          </h2>
        </div>
        <div className='eh__wid-text__bar'></div>
      </div>
      
    </div>
  )
}

export default WID
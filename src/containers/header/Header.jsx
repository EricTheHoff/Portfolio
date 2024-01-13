import React from 'react'
import widImage from '../../assets/widImage.svg'
import './header.css'

const Header = () => {
  return (
    <div className='container section__padding' id='wid'>
      <div className='fi-1'>
        <div className='image'>
          <img src={widImage} alt='placeholder'/>
        </div>
      </div>
      <div className='fi-2'>
        <div className='text'>
          <h1>What I Do</h1>
          <p>I create full stack web applications
            and sites using JavaScript, HTML, CSS,
            and frameworks such as React, NodeJS,
            and PostgreSQL.<br/>
            Interested in seeing some of my work?
            Click the button to see more!
          </p>
          <div className='btn'>
            <button type='button'>My Work</button>
          </div>
        </div>
        <div className='bar'></div>
      </div>
    </div>
  )
}

export default Header
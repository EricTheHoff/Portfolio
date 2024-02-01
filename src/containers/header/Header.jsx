import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='container section__padding' id='more'>
      <div className='title'>
        <h4>Thank you!</h4>
      </div>
      <div className='flex'>
        <div className='contact'>
          <p>eric.peter.hoffman@gmail.com</p>
          <p>(801) 404-9452</p>
        </div>

        <div className='links'>
          <p><a href='https://www.linkedin.com/in/erichoffman98/' target='blank'>LinkedIn</a></p>
          <p><a href='https://github.com/EricTheHoff' target='blank'>Github</a></p>
          <p><a href='https://drive.google.com/file/d/1aoFr82uaBhfC5eLwWI1VFTM-U3XY9vEW/view?usp=sharing' target='blank'>View my Resume</a></p>
        </div>
      </div>
    </div>
  )
}

export default Header
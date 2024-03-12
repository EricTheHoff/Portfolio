import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='eh__footer section__padding' id='more'>
      
      <div className='eh__footer-ty'>
        <h4>Thank you!</h4>
      </div>

      <div className='eh__footer-content'>
        <div className='eh__footer-contact-info'>
          <p>eric.peter.hoffman@gmail.com</p>
          <p>(801) 404-9452</p>
        </div>

        <div className='eh__footer-links'>
          <p><a href='https://www.linkedin.com/in/erichoffman98/' target='blank'>LinkedIn</a></p>
          <p><a href='https://github.com/EricTheHoff' target='blank'>Github</a></p>
          <p><a href='https://drive.google.com/file/d/1XK2LlPSjYl_uiZJFS0c0d9IUjNLh0kkK/view?usp=sharing' target='blank'>View My Resume</a></p>
        </div>
      </div>

    </div>
  )
}

export default Footer
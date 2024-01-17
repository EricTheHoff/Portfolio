import React from 'react'
import './header.css'

const Header = ({ handleClick }) => {
  return (
    <div
      className='container section__padding'>
      <div className='btn'>
        <button type='button' onClick={handleClick}>Click Me</button>
      </div>
      <div className='text'>
        <p>This should go away.</p>
      </div>
    </div>
  )
}

export default Header
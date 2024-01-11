import React from 'react'
import portrait from '../../assets/portrait.png'
import './header.css'

const Header = () => {
  return (
    <div className='container section__padding'>
      <div className='flex-item-1'>
        <div className='bar-div'></div>
        <div className='text-div'>
          <p className='title'>Welcome</p>
          <p className='sb-1'>Subtext 1</p>
          <p className='sb-2'>Subtext 2</p>
          <p className='desc'>Creating applications from start to
            finish with clean and efficient design.</p>
        </div>
      </div>
      <div className='flex-item-2'>
        <div className='img-div'>
          <img src={portrait} alt='placeholder'/>
        </div>
      </div>
    </div>
  )
}

export default Header
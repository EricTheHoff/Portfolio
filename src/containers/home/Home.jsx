import React from 'react'
import baseImageHome from '../../assets/baseImageHome.svg'
import baseEllipseHome from '../../assets/baseEllipseHome.svg'
import portrait from '../../assets/portrait.png'
import './home.css'

const Home = () => {
  return (
    <div className='eh__home section__padding' id='home'>

      <div className='eh__home-welcome'>
        <div className='gradient__bar'></div>

        <div className='eh__home-text'>
          <h1 className='gradient__text'>Welcome</h1>
          <p className='text-lg text-1'>Full Stack Web Development</p>
          <p className='text-lg text-2' id='final-text-lg'>Front End Design</p>
          <p className='text-3'>Creating applications from start to finish with clean and efficient design.</p>
        </div>

      </div>

      <div className='eh__home-img'>
        <div className='eh__img-container'>
          <img className='rotate-center' src={baseImageHome} alt='placeholder'/>
          <img className='slide-left' src={baseEllipseHome} alt='placeholder'/>
          <img className='portrait' src={portrait} alt='placeholder'/>
        </div>
      </div>


    </div>
  )
}

export default Home
import React from 'react'
import baseImageHome from '../../assets/baseImageHome.svg'
import baseEllipseHome from '../../assets/baseEllipseHome.svg'
import portrait from '../../assets/portrait.png'
import './home.css'

const Home = () => {
  return (
    <div className='eh__home section__padding' id='home'>
      <div className='gradient__bar'></div>
      
      <div className='eh__home-content'>


        <h1 className='gradient__text'>Welcome</h1>

        <div className='eh__home-content_subtext'>
          <p className='subtext-larger'>Full Stack Web Development</p>
          <p className='subtext-larger' id='final-subtext-larger'>Front End Design</p>
          <p>Creating applications from start to finish with clean and efficient design.</p>
        </div>

        <div className='eh__home-image'>
          <img className='rotate-center' src={baseImageHome} alt='placeholder'/>
          <img className='slide-left' src={baseEllipseHome} alt='placeholder'/>
          <img className='portrait' src={portrait} alt='placeholder'/>
        </div>


      </div>
    </div>
  )
}

export default Home
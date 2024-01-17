import React, { useEffect } from 'react'
import portrait from '../../assets/portrait.png'
import homeImage from '../../assets/homeImage.svg'
import './home.css'

const Home = () => {
  const setMinHeight = () => {
    const navbarHeight = document.getElementById('navbar').offsetHeight
    const homePage = document.querySelector('.eh__home')
    homePage.style.minHeight = `calc(100vh - ${navbarHeight}px)`
  }

  useEffect(() => {
    setMinHeight()

    return (
      () => {
        window.removeEventListener('resize', setMinHeight)
      }
    )
  }, [])

  useEffect(() => {
    window.addEventListener('resize', setMinHeight)

    return (
      () => {
        window.removeEventListener('resize', setMinHeight)
      }
    )
  }, [])

  return (
    <div className='eh__home section__padding' id='home'>

      <div className='eh__home-text'>
        <div className='eh__home-text__bar'></div>
        <div className='eh__home-text__content'>
          <h1>Welcome</h1>
          <p>Howdy! My name is Eric Hoffman, and I'm a full-stack web developer based in Utah Valley
              with a particular passion for front-end design and creating a smooth user experience! To me, web
              development offers a fantastic balance of technical problem-solving and creativity. When I'm not wondering why
              a div isn't aligning how I want, I like to spend my time reading, watching shows with
              my fiancée, and getting tossed off cliffs in Baldurs Gate III. Feel free to reach out with
              any questions or proposals!
          </p>
          <h2>{`<Front End Design/>`}<br/>
              {`<Full Stack Web Applications/>`}
          </h2>
          <h3>Creating projects from start to finish<br/>
              with clean and efficient design.
          </h3>
        </div>
      </div>

      <div className='eh__home-image'>
        <img src={portrait} alt='placeholder'/>
        <img src={homeImage} alt='placeholder'/>
      </div>
      
    </div>
  )
}

export default Home
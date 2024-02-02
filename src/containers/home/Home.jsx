import React, { useEffect } from 'react'
import portrait from '../../assets/portrait.jpg'
import homeImage from '../../assets/homeImage.svg'
import './home.css'

const Home = () => {
  // Dynamically sets .eh__home height based on the whole viewport height minus the navbar's height.
  const setMinHeight = () => {
    const navbarHeight = document.getElementById('navbar').offsetHeight
    const homePage = document.querySelector('.eh__home')
    homePage.style.minHeight = `calc(100vh - ${navbarHeight}px)`
  }

  // Height is set on initial render, and removes any event listeners for resizing to prevent memory leaks.
  useEffect(() => {
    setMinHeight()

    return (
      () => {
        window.removeEventListener('resize', setMinHeight)
      }
    )
  }, [])

  // Adds an event listener for resizing on initial render.
  useEffect(() => {
    window.addEventListener('resize', setMinHeight)

    return (
      () => {
        // Removes event listener to prevent memory leakage.
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
              with a passion for front-end design and creating an enjoyable user experience! To me, web
              development offers a fantastic balance of technical problem-solving and creativity rarely seen
              elsewhere. I'm looking forward to furthering my development and design expertise in future projects,
              and I invite you to <a className='eh__home-explore' href='#wid'>explore my work here</a>. Thank you!
          </p>
          <h2>{`<Front End Design/>`}<br/>
              {`<Server-Side Development/>`}
          </h2>
          <h3>Creating projects from start to finish<br/>
              with clean and efficient code.
          </h3>
        </div>
        
      </div>

      <div className='eh__home-image'>
        <img src={portrait} alt='Eric'/>
        <img src={homeImage} alt='Background'/>
      </div>
    </div>
  )
}

export default Home
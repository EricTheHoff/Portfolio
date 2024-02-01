import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Project from '../../components/project/Project.jsx'
import previous from '../../assets/previous.svg'
import next from '../../assets/next.svg'
import './projects.css'

const Projects = ({ setShowProjects }) => {
  const [currentCard, setCurrentCard] = useState(0)
  const [cardArray, setCardArray] = useState([])
  const [width, setWidth] = useState(window.innerWidth)

  // useEffect hook to get an array of projects from the database and populate cardArray.
  useEffect(() => {
    axios.get('/projects')

    .then((res) => {
      const results = res.data
      setCardArray(results)
    })

    .catch((error) => {
      console.error(`An error has occcurred when fetching project data: ${error}`)
    })
  },[])

  // useEffect hook to determine the screensize of the viewing device. Using conditional rendering to modify HTML structure for the return of this Component.
  useEffect(() => {
    const screenResize = () => {
      setWidth(window.innerWidth)
    }
    // Event listener for when the screen is resized.
    window.addEventListener('resize', screenResize)

    return () => {
      // Cleanup event listener to prevent memory leakage.
      window.removeEventListener('resize', screenResize)
    }
  },[])

  // The prev/nextClicked functions update the currentCard variable, and resets it once it reaches the limit of cardArray.length.
  const prevClicked = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? (cardArray.length - 1) : prevCard - 1))
  }

  const nextClicked = () => {
    setCurrentCard((prevCard) => (prevCard === (cardArray.length - 1) ? 0 : prevCard + 1))
  }

  // Function to determine the display order of the cards. Creates an array of the card id in the current spot and the card id of the next spot. Returns the index of the card if its within the current or next spots.
  const getCardOrder = (id) => {
    const cardOrder = [currentCard, (currentCard + 1) % cardArray.length]
    return cardOrder.indexOf(id)
  }

  // Function that returns an array of the current and next indices. Only cards where their id = the index will be visible.
  const getVisibleCards = () => {
    return [currentCard, (currentCard + 1) % cardArray.length]
  }

  return (
    <div className='eh__projects section__padding'>

      {/* Checking screensize here to determine if the project nav-buttons (eg prev and next) should be left/right of the project display window, or below it. */}
      {width < 1280
        ?
          <div className='eh__projects-cards'>

            <div className='eh__projects-cards-display'>
              {/* Renders a Project component for each element within cardArray. Order will be determined by their index positioning in the cardArray. If the card is in the current or next position, it will be set to display. */}
              {cardArray.map((el) => {
                const {projectId, title, description, demoLink, githubLink} = el
                return (
                  <div
                    key={projectId}
                    className='eh__projects-cards_card'
                    style={{
                      order: getCardOrder(projectId - 1),
                      display: getVisibleCards().includes(projectId - 1) ? 'flex' : 'none',
                    }}
                  >
                    <Project
                      title={title}
                      description={description}
                      demoLink={demoLink}
                      githubLink={githubLink}
                    />
                  </div>
                )
              })}
            </div>

            <div className='eh__projects-cards-nav-btn'>
              <div className={`eh__projects-cards-prev${cardArray.length < 3 ? ' hide-btn' : ''}`} onClick={prevClicked}>
                <img src={previous} alt='Previous'/>
              </div>

              <div className={`eh__projects-cards-next${cardArray.length < 3 ? ' hide-btn' : ''}`} onClick={nextClicked}>
                <img src={next} alt='Next'/>
              </div>
            </div>

          </div>
        :
          <div className='eh__projects-cards'>
            <div className={`eh__projects-cards-prev${cardArray.length < 3 ? ' hide-btn' : ''}`} onClick={prevClicked}>
              <img src={previous} alt='Previous'/>
            </div>

            <div className='eh__projects-cards-display'>
              {/* Renders a Project component for each element within cardArray. Order will be determined by their index positioning in the cardArray. If the card is in the current or next position, it will be set to display. */}
              {cardArray.map((el) => {
                const {projectId, title, description, demoLink, githubLink} = el
                return (
                  <div
                    key={projectId}
                    className='eh__projects-cards_card'
                    style={{
                      order: getCardOrder(projectId - 1),
                      display: getVisibleCards().includes(projectId - 1) ? 'flex' : 'none',
                    }}
                  >
                    <Project
                      title={title}
                      description={description}
                      demoLink={demoLink}
                      githubLink={githubLink}
                    />
                  </div>
                )
              })}
            </div>

            <div className={`eh__projects-cards-next${cardArray.length < 3 ? ' hide-btn' : ''}`} onClick={nextClicked}>
              <img src={next} alt='Next'/>
            </div>
          </div>
      }


      <div className='eh__projects-btn'>
        <button type='button' onClick={() => setShowProjects(false)}>Back</button>
      </div>

    </div>
  )
}

export default Projects
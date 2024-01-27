import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Project from '../../components/project/Project.jsx'
import previous from '../../assets/previous.svg'
import next from '../../assets/next.svg'
import './projects.css'

const Projects = ({ setShowProjects }) => {
  const [currentCard, setCurrentCard] = useState(0)
  const [cardArray, setCardArray] = useState([])

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

  const prevClicked = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? (cardArray.length - 1) : prevCard - 1))
  }

  const nextClicked = () => {
    setCurrentCard((prevCard) => (prevCard === (cardArray.length - 1) ? 0 : prevCard + 1))
  }

  // Function to determine the display order of the cards. Creates an array of the card id in the current spot
  // and the card id of the next spot. Returns the index of the card if its within the current or next spots.
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

      <div className='eh__projects-cards'>
        <div className='eh__projects-cards-prev' onClick={prevClicked}>
          <img src={previous} alt='Previous'/>
        </div>

        <div className='eh__projects-cards-display'>
          {/* Renders a Project component for each element within cardArray. */}
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
                  index={projectId}
                  title={title}
                  description={description}
                  demoLink={demoLink}
                  githubLink={githubLink}
                />
              </div>
            )
          })}
        </div>

        <div className='eh__projects-cards-next' onClick={nextClicked}>
          <img src={next} alt='Next'/>
        </div>
      </div>

      <div className='eh__projects-btn'>
        <button type='button' onClick={() => setShowProjects(false)}>Back</button>
      </div>

    </div>
  )
}

export default Projects
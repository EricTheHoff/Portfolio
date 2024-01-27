import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './header.css'
import Project from '../../components/project/Project.jsx';
import previous from '../../assets/previous.svg'
import next from '../../assets/next.svg'

const Header = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [cardArray, setCardArray] = useState([0, 1, 2])
  // console.log(currentCard)

  const prevClicked = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? 2 : prevCard - 1))
  }

  const nextClicked = () => {
    setCurrentCard((prevCard) => (prevCard === 2 ? 0 : prevCard + 1))
  }

  // useEffect(() => {
  //   console.log(currentCard)
  // },[currentCard])

  const getCardOrder = (idx) => {
    // [0, 1, 2] => order 1, [1, 2, 0] => order 2, 
    const cardOrder = [currentCard, (currentCard + 1) % 3, (currentCard + 2) % 3]
    return cardOrder.indexOf(idx) + 1
  }

  const getVisibleIndices = () => {
    return [currentCard, (currentCard + 1) % 3]
  }

  return (
    <div className='container section__padding'>

      <div className='card-container'>
        <div className='prev' onClick={prevClicked}>
          <img src={previous} alt='previous'/>
        </div>

        <div className='card-grid'>
          {cardArray.map((idx) => (
            <div
              key={idx}
              className='card'
              style={{
                order: getCardOrder(idx),
                display: getVisibleIndices().includes(idx) ? 'flex' : 'none',
              }}
            >
              <Project
                index={idx}
              />
            </div>
          ))}
        </div>

        <div className='next' onClick={nextClicked}>
          <img src={next} alt='next'/>
        </div>
      </div>

      <div className='page-button'>
        <button type='button'>Back</button>
      </div>

    </div>
  )
}

export default Header
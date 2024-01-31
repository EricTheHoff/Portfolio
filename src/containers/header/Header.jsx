import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import './header.css'

const Header = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = () => {
    const dataForEmail = {
      name,
      email,
      message,
    }

    axios.post('/email', dataForEmail)

    .then(() => {
      toast(`Your email has been sent. Thank you!`)
    })

    .catch((error) => {
      console.error(`The following error has occurred: ${error}`)
    })
  }

  return (
    <div className='container section__padding'>

      <div className='border-tl'></div>

      <div className='content'>
        <div className='title'>
          <h1>Want to reach out?</h1>
          <h3>Feel free to send me any questions or proposals you have!</h3>
        </div>

        <form className='form' onSubmit={(e) => {
          e.preventDefault()
          sendEmail()
        }}>
          <div className='top'>
            <input
              className='name'
              type='text'
              placeholder='Your Name...'
              onChange={(e) => setName(e.target.value)}>
            </input>
            <input
              className='email'
              type='email'
              placeholder='Your Email...'
              onChange={(e) => setEmail(e.target.value)}>
            </input>
          </div>
          <div className='bottom'>
            <textarea
              className='message'
              placeholder="Hi, I'm reaching out out to you because I'm interested in designing a site for my new company. When could we discuss this further?"
              onChange={(e) => setMessage(e.target.value)}>
            </textarea>
          </div>

          <div className='contact-btn'>
            <button type='submit'>Email</button>
          </div>
        </form>

      </div>

      <div className='border-br'></div>

    </div>
  )
}

export default Header
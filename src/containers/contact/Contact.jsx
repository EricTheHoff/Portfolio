import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import './contact.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // This function sends a call to Express, which triggers an email through SendGrid.
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
    <div className='eh__contact section__padding' id='contact'>
      <div className='eh__contact-border-top-left'></div>

      <div className='eh__contact-content'>

        <div className='eh__contact-title'>
          <h1>Want to reach out?</h1>
          <h3>Feel free to send me any questions or proposals you have!</h3>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          sendEmail()
        }}>
          <div className='eh__contact-form-top-row'>
            <input
              name='name'
              className='eh__contact-form-name'
              type='text'
              placeholder='Your Name...'
              required
              autoComplete='given-name'
              onChange={(e) => setName(e.target.value)}>
            </input>
            <input
              name='email'
              className='eh__contact-form-email'
              type='email'
              placeholder='Your Email...'
              required
              autoComplete='email'
              onChange={(e) => setEmail(e.target.value)}>
            </input>
          </div>

          <div className='eh__contact-form-bottom-row'>
            <textarea
              name='message'
              className='eh__contact-form-message'
              placeholder="Hi, I'm reaching out out to you because I'm interested in designing a site for my new company. When could we discuss this further?"
              required
              onChange={(e) => setMessage(e.target.value)}>
            </textarea>
          </div>

          <div className='eh__contact-btn'>
            <button type='submit'>Email</button>
          </div>
        </form>

      </div>

      <div className='eh__contact-border-bottom-right'></div>
    </div>
  )
}

export default Contact
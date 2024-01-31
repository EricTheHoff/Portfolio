import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import { Project } from '../src/database/model.js'
import sgMail from '@sendgrid/mail'
import 'dotenv/config'

const app = express()
const port = 8100

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_KEY)

app.get('/projects', async (req, res) => {
  const projects = await Project.findAll()

  res.send(projects)
})
app.post('/email', (req, res) => {
  const { name, email, message } = req.body

  const emailData = {
    to: 'eric.peter.hoffman@gmail.com',
    from: {
      name: 'EricTheHoff',
      email: 'hoffman.dev.testing@gmail.com'
    },
    subject: 'Email Test',
    text: name + ` - ` + email + ` - ` + message,
  }

  sgMail.send(emailData)

  .then(() => {
    console.log(`Email has been sent.`)
    res.status(200).json({ success: true })
  })

  .catch((error) => {
    console.error(`The following error has occurred: ${error}`)
    res.status(500).json({ error: 'Internal Server Error' })
  })
})

ViteExpress.listen(app, port, () => console.log(`Server has been initialized at http://localhost:${port}`))
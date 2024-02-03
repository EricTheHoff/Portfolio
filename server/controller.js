import { Project } from './database/model.js'
import sgMail from '@sendgrid/mail'
import path from 'path'
import 'dotenv/config'

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_KEY)

const controllerFunctions = {

  // Default route
  home: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
  },

  // Queries DB for all projects and returns them in the response.
  getProjects: async (req, res) => {
    const projects = await Project.findAll()

    res.send(projects)
  },

  // Sends an email via SendGrid.
  sendEmail: async (req, res) => {
    const { name, email, message } = req.body

    const emailData = {
      to: 'eric.peter.hoffman@gmail.com',
      from: {
        name: 'EricTheHoff',
        email: 'hoffman.dev.testing@gmail.com',
      },
      templateId: process.env.REACT_APP_SENDGRID_TEMPLATE,
      dynamicTemplateData: {
        name,
        email,
        message,
      }
    }

    sgMail.send(emailData)

    .then(() => {
      console.log('Email has been sent.')
      res.status(200).json({ success: true })
    })

    .catch((error) => {
      console.error(`The following error has occurred: ${error}`)
      res.status(500).json({ error: 'Internal Server Error' })
    })
  },
  
}

export default controllerFunctions
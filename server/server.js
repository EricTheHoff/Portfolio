import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import ViteExpress from 'vite-express'
import controllerFunctions from './controller.js'
import 'dotenv/config.js'

const app = express()
const port = process.env.REACT_APP_PORT || 5174

//Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())

// Express routes
app.get('/api/v1/projects', controllerFunctions.getProjects)
app.post('/api/v1/email', controllerFunctions.sendEmail)

ViteExpress.listen(app, port, () => console.log(`Server has been initialized at http://localhost:${port}`))
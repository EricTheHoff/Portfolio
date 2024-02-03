import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import ViteExpress from 'vite-express'
import controllerFunctions from './controller.js'
import 'dotenv/config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.REACT_APP_PORT || 5174

//Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(cors())
app.use(express.json())

// Express routes
app.get('/', controllerFunctions.home)
app.get('/api/v1/projects', controllerFunctions.getProjects)
app.post('/api/v1/email', controllerFunctions.sendEmail)

ViteExpress.listen(app, port, () => console.log(`Server is listening on port ${port}`))
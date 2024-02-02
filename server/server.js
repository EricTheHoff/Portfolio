import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import controllerFunctions from './controller.js'

const app = express()
const port = 8100

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/projects', controllerFunctions.getProjects)
app.post('/email', controllerFunctions.sendEmail)

ViteExpress.listen(app, port, () => console.log(`Server has been initialized at http://localhost:${port}`))
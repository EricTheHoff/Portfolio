import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'

const app = express()
const port = 8100

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

ViteExpress.listen(app, port, () => console.log(`Server has been initialized at http://localhost:${port}`))
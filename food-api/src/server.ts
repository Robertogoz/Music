import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import { runDb } from './database/Schema'

const port = 3030
const app = express()

// cors
app.use(cors())

// body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Router
app.use(routes)

runDb()

app.listen(port, () => console.log(`server running on port ${port}`))

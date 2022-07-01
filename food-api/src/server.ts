import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const port = 3030
const app = express()

const allowedOrigins = ['http://localhost:19000']

const options: cors.CorsOptions = {
  origin: allowedOrigins,
}

app.use(cors(options))
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`server running on port ${port}`))

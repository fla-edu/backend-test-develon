import express from 'express'
import { router } from './routes/router'
import 'express-async-errors'
import { ErrorRequestHandler } from './errors/errorHandler'

const app = express()
const PORT = 5555

app.use(express.json())
app.use('/api/', router)
app.use(ErrorRequestHandler)

app.listen(PORT, () => console.log(`🔥 Server Started! http://localhost:${PORT}`))
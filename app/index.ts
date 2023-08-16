import express from 'express'
import { userRouter } from './routes/user.js'

const app = express()

app.use('/api', userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server listen in port: ${PORT}`)
})

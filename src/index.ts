import express, {Express} from 'express'
import dotenv from 'dotenv'
import router from './routes'
dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3001


app.use('/api/v1/', router)

app.listen(PORT, () => {
    console.log(`Server start on ${PORT}`)
})
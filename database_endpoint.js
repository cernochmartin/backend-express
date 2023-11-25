import express from 'express'
import dotenv from 'dotenv'
import { getUsers, createUser } from './database.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Listening on port: ${PORT}.`)
)

app.get('/users', async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

app.post('/users', async (req, res) => {
    const { idusers, firstname, lastname } = req.body
    const user = await createUser(idusers, firstname, lastname)
    res.status(201).send(user) 
})
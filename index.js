import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Listening on port: ${PORT}.`)
)

app.get('/users', (req, res) => {
    res.status(200).send({
        name: 'John',
        surname: 'Doe'
    })
})

app.post('/users/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const { surname } = req.body

    if (!name || !surname) {
        res.status(418).send({ message: 'Input name and surname!' })
    }

    res.send({
        user: `${name} ${surname} with an id of ${id}.`
    })
})
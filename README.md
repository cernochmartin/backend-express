# Simple Express Back End
### A simple Back End API endpoint for showcase 

You must have git and Node.js client installed on your device

Git clone repository
```
git clone https://github.com/cernochmartin/backend-express
```

Go to repository directory
```
cd backend-express
```

Run npm install or npm i
```
npm install
```
```
npm i
```

Run node . or node index.js
```
node .
```
```
node index.js
```

Simple Express setup with `console.log()` to check, if it's up and running
```js
const express = require('express')
const app = express()
const PORT = 8082

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Listening on port: ${PORT}`)
)
```

Sends a GET HTTP request to `http://localhost:{PORT}` and retrieves a JSON object containing a name and a surname
```js
app.get('/users', (req, res) => {
    res.status(200).send({
        name: 'John',
        surname: 'Doe'
    })
})
```

Sends a POST HTTP request to `http://localhost:{PORT}/{ID}`, the body should contain a name and a surname or it's going to throw and error
```js
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
```

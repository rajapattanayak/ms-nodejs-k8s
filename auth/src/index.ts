import express from 'express'
import { json } from 'body-parser'

const app = express()
app.use(json())

app.get('/api/users/currentuser', (req, res) => {
    console.log('Debug1')
    res.send('Hi there !')
})

app.listen(3000, () => {
    console.log('Listening auth service on port 3000 !')
})
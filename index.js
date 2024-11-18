require('dotenv').config()
console.log("Hello World");

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    console.log('Enter your email and password')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
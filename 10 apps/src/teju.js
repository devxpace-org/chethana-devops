const express = require('express')
const app = express()
const port = 3000

app.get('/teju', (req, res) => {
  res.send('HI TEJU!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
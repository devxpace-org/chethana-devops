const express = require('express')
const app = express()
const port = 3000

app.get('/raja', (req, res) => {
  res.send('HI RAJA!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
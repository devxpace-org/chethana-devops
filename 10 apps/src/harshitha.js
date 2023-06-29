const express = require('express')
const app = express()
const port = 3000

app.get('/harshitha', (req, res) => {
  res.send('HI HARSHITHA!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/newplace', (req, res) => {
  res.send("This is Chetana's new place!")
})

app.listen(port, () => {
  console.log(`chetana app listening on port ${port}`)
})
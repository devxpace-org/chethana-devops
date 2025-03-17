const express = require('express')
const app = express()
const port = 3000

app.get('/helloworld', (req, res) => {
  res.send("This is Chetana's World!")
})

app.listen(port, () => {
  console.log(`chetana app listening on port ${port}`)
})
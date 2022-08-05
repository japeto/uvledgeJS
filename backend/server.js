const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.json({ username: 'username', pass: 'pass',  })
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
const express = require('express')
// import express from 'express'
const app = express()
const port = 3000


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


  
app.get('/', (req, res) => {
  res.send('Hello World!')
    // res.json('Hello World!')
})


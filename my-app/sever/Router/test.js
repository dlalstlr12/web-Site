const express = require('express')
const app = express()
const port = 5000

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://leeminsik:ad3731@cluster0.ptqpr.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('MogoDB Connected..'))
 .catch(err =>console.log(err))
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
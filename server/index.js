const express = require('express')
const app = express()
const port = 3001
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const router = require('./router')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/dist')))

app.use('/', router)

app.listen(port, () => console.log(`Server running, catch it on port ${port}`))

// app.get('/main.js', (req, res) => {
//   if(err){
//     console.log(err)
//   }
//   res.status(200).sendFile('./client/dist')
// })

module.exports = app
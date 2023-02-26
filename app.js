const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const bodyparser = require('body-parser')
require('dotenv/config')
app.use(bodyparser.json())

//middleware
const postsRoute = require('./routes/posts')
app.use('/api/info',postsRoute)

app.use('/',(req,res)=>{
    res.send('welcome to api')
})

//mongoose
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('connected')
})

//port
app.listen(3001)
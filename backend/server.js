require('dotenv').config()

const express = require('express')
const workoutroutes = require('./routes/workouts')
const mongoose = require('mongoose')

// express app
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Connect to DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & listening on port 4000!!!', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })

app.use('/api/workouts', workoutroutes)


const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const PORT = 3500
const todoRoutes = require('./routes/todoRoutes')


// connect to database
const dbURI = "mongodb+srv://mongotut:testing123@cluster0.5arertl.mongodb.net/ShopDB?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(PORT, () => {
        console.log('Server is running on port '+PORT)
        console.log('connected to the DB')
    }))
    .catch(err => console.log(err))


// middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use((req, res, next) => next());

// view engine
app.set('view engine', "ejs")


// Routes
app.get('/', (req, res) => res.redirect('/todo'))
app.use(todoRoutes)

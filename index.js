const express = require('express');
const {engine} = require('express-handlebars');

const app = express()

//Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/', require('./routes/home'))
app.use('/api/books', require('./routes/routes'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Sercver is running on port ${PORT}`))
const express = require('express')

const app = express()

app.use('/api/books', require('./routes/routes'))

//Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Sercver is running on port ${PORT}`))
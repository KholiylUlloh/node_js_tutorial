const express = require('express')
const path = require('path')
const books = require('./books')

const app = express()

//Get all books
app.get('/api/books', (req, res)=>{
    res.json(books)
})

//Get a book by id
app.get('/api/books/:id', (req, res)=>{
   const isExist = books.some(book => book.id == req.params.id)
   if(isExist) {
    res.json(books.filter(book => book.id == req.params.id))
   }else {
    res.status(404).json({message:`The book ${req.params.id} is not available`})
   }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Sercver is running on port ${PORT}`))
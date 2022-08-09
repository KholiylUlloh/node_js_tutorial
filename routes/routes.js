const {Router} = require('express');
const router = Router()
const books = require('../books')
const uuid = require('uuid')

// Get all books
router.get('/',(req, res)=>{
    res.json(books)
})

// Get a book by id
router.get('/', (req, res)=>{
   const isExist = books.some(book => book.id == req.params.id)
   if(isExist) {
    res.json(books.filter(book => book.id == req.params.id))
   }else {
    res.status(404).json({message:`The book ${req.params.id} is not available`})
   }
})

router.post('/', (req, res)=>{
    const newBook = {
        id: uuid.v4(),
        name: req.body.name,
        pages: req.body.pages,
        author: req.body.author
    }
    
    if(!req.body.name || !req.body.author || !req.body.pages) {
       return res.status(400).json({message: 'Please enter all informations'})
    }
    books.push(newBook)
    res.json(books)
})

module.exports = router
const books = require('express').Router()

books.get('/', (req, res) => {
    res.send('Hello world from BooksAPI!')
})

module.exports = books
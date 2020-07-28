const express = require('express')
const BookController = require('./BookController')
const bookController = new BookController()

const routes = express.Router()

routes.get('/', (req, res) => res.json('Página inicial'))
routes.get('/author', (req, res) => bookController.searchAuthor(req, res))
routes.get('/hash', (req, res) => bookController.searchByHash(req, res))
routes.post('/', (req, res) => bookController.createBook(res, req))
routes.put('/update', (req, res) => bookController.updateBook(req, res))
routes.delete('/delete/:id', (req, res) => bookController.deleteBook(req, res))

module.exports = routes
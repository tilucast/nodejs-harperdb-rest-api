const BooksDao = require('./BooksDao')
class BookController{
    constructor(){
        this.booksDao = new BooksDao()
    }

    createBook(res, req){
        this.booksDao.addBook(res, req)
    }

    searchAuthor(req, res){
        this.booksDao.searchBook(req, res)
    }

    searchByHash(req, res){
        this.booksDao.searchByHash(req, res)
    }

    updateBook(req, res){
        this.booksDao.updateBook(req, res)
    }

    deleteBook(req, res){
        this.booksDao.deleteBook(req, res)
    }
}

module.exports = BookController
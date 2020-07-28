class BooksDao{
    constructor(){
        this.db = require('./dbconfig')
    }

    addBook(res, req){
        this.db.insert({
            table: 'books',
            records: [
                {
                    title: req.body.title,
                    author: req.body.author
                }
            ]
        }, (err, result) =>{
            if(err) 
                return res.status(500).json(err)

            console.log(result)
            return res.status(200).json(result)
        })
    }

    searchBook(req, res){
        this.db.searchByValue({
            table: 'books',
            searchAttribute: 'author',
            searchValue: req.body.author,
            attributes: ['*']
        }, (err, result) =>{
            if(err) res.status(res.statusCode).json(err)

            console.log(result.data)
            return res.status(res.statusCode).json(result.data)
        })
    }

    searchByHash(req, res){
        this.db.searchByHash({
            table: 'books',
            hashValues: [req.body.id],
            attributes: ['title']
        }, (err, result) =>{
            if(err) res.status(res.statusCode).json(err)

            console.log(result.data)
            return res.status(res.statusCode).json(result.data)
        })
    }

    updateBook(req, res){
        this.db.update({
            table: 'books',
            records: [
                {
                    id: req.body.id,
                    author: req.body.author,
                    title: req.body.title
                }
            ]
        }, (err, result) =>{
            if(err) res.status(res.statusCode).json(err)

            console.log(result)
            return res.status(res.statusCode).json(result)
        })
    }

    deleteBook(req, res){
        this.db.delete({
            table: 'books',
            hashValues: [req.params.id]
        }, (err, result) =>{
            if(err) res.status(res.statusCode).json(err)

            console.log(result.data)
            return res.status(res.statusCode).json(result.data)
        })
    }
}

module.exports = BooksDao
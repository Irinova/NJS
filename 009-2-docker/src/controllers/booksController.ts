import {BooksModel} from "../models/booksModel";

class BooksController {
  booksModel
  constructor() {
    this.booksModel = new BooksModel()
  }

  getAllBooks = (req, res) => {
    const books = this.booksModel.getAllBooks()
    res.json(books)
  };

  getBook = (req, res) => {
    const id = req.params?.id
    const book = this.booksModel.getBook(id)
    if (!book) {
      res.send(404)
    } else {
      res.json(book)
    }
  }

  updateBook = (req, res) => {
    const body = req.body
    const id = req.params?.id
    const updatedBook = this.booksModel.updateBook(body, id, req.file)
    if (!updatedBook) {
      res.send(404)
    } else {
      res.json(updatedBook)
    }
  }

  getCounter = async (req, res, client) => {
    const id = req.params?.id
    try {
      const value = await client.get(id);
      res.json({ value })
    } catch (e) {
      console.error(e)
      res.sendStatus(500)
    }
  }
  updateCounter = async (req, res, client) => {
    const id = req.params?.id
    try {
      await client.incr(id)
      res.sendStatus(200)
    } catch (e) {
      res.sendStatus(500)
    }
  }

  deleteBook = (req, res) => {
    const deletedBookId = req.params?.id
    const books = this.booksModel.deleteBook(deletedBookId)
    if (!books) {
      res.send(404)
    } else {
      return books
    }
  }

  createBook = (req, res) => {
    const book = this.booksModel.createBook(req.body, req.file)
    if (!book) {
      res.send(500)
    } else {
      res.json(book)
    }
  }

  getBookCover = (req, res) => {
    const bookId = req.params?.id
    const file = this.booksModel.getBookCover(bookId)
    if (!file) {
      res.send(404)
    } else {
      res.download(file)
    }
  }
}

export default BooksController

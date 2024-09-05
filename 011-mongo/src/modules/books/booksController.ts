import {BooksModel} from "./booksModel";

class BooksController {
  booksModel
  constructor() {
    this.booksModel = new BooksModel()
  }

  getAllBooks = async (req, res) => {
    const books = await this.booksModel.getAllBooks()
    res.json(books)
  };

  getBook = async (req, res) => {
    const id = req.params?.id
    const book = await this.booksModel.getBook(id)
    if (!book) {
      res.send(404)
    } else {
      res.json(book)
    }
  }

  updateBook = async (req, res) => {
    const body = req.body
    const id = req.params?.id
    const updatedBook = await this.booksModel.updateBook(body, id, req.file)
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

  deleteBook = async (req, res) => {
    const deletedBookId = req.params?.id
    const books = await this.booksModel.deleteBook(deletedBookId)
    if (!books) {
      res.send(404)
    } else {
      return res.json(books)
    }
  }

  createBook = async (req, res) => {
    const book = await this.booksModel.createBook(req.body, req.file)
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

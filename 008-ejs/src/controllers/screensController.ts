import {BooksModel} from "../models/booksModel";
import {Book} from "../types/Book";


class ScreensController {

  getAllBooks = (req, res, booksModel: BooksModel) => {
    const books = booksModel.getAllBooks()
    res.render("../src/views/books/index", {
      title: "Список книг",
      books,
    });
  };

  getBook = (req, res, booksModel: BooksModel) => {
    const id = req.params?.id
    const book = booksModel.getBook(id)
    if (!book) {
      res.redirect('/404');
    } else {
      res.render("../src/views/books/view", {
        title: `Книга ${(book as Book).title}`,
        book,
      });
    }
  }

  updateBookView = (req, res, booksModel: BooksModel) => {
    const id = req.params?.id
    const book = booksModel.getBook(id)
    if (!book) {
      res.send(404)
    } else {
      res.render("../src/views/books/update", {
        title: `Редактирование книги ${(book as Book).title}`,
        book
      });
    }
  }

  updateBook = (req, res, booksModel: BooksModel) => {
    const body = req.body
    const id = req.params?.id
    const updatedBook = booksModel.updateBook(body, id, req.file)
    if (!updatedBook) {
      res.send(404)
    } else {
      res.render("../src/views/books/success", { title: 'Редактирование книги' });
    }
  }

  createBookView = (req, res) => {
    res.render("../src/views/books/create", {
      title: 'Добавление новой книги',
      book: {
        title: '',
        description: ''
      }
    });
  }

  createBook = (req, res, booksModel: BooksModel) => {
    const book = booksModel.createBook(req.body, req.file)
    if (!book) {
      res.send(500)
    } else {
      res.render("../src/views/books/success", { title: 'Добавление новой книги' });
    }
  }
}

export default ScreensController

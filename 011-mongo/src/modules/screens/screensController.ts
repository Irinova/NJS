import {BooksModel} from "../books/booksModel";
import {BookType} from "../books/BookType";


class ScreensController {

  loginView = (req, res) => {
    res.render("../src/views/login", { title: 'Вход в личный кабинет' });
  }

  getAllBooksView = (req, res, booksModel: BooksModel) => {
    const books = booksModel.getAllBooks()
    res.render("../src/views/books/index", {
      title: "Список книг",
      books,
    });
  };

  getBookView = async (req, res, booksModel: BooksModel) => {
    const id = req.params?.id
    const book = await booksModel.getBook(id)
    if (!book) {
      res.redirect('/404');
    } else {
      res.render("../src/views/books/view", {
        title: `Книга ${(book as BookType).title}`,
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
        title: `Редактирование книги ${(book as BookType).title}`,
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

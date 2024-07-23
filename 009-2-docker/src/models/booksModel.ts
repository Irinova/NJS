import { Book } from "../types/Book";
import { getMockBooks } from "../utils/getMockBooks";
import {generateId} from "../utils/generateId";

export class BooksModel {
  constructor() {}
  books: Book[] = getMockBooks()

  getAllBooks = () => {
    return this.books
  };

  getBook = (id: string) => {
    const book = this.books.find((book) => book.id === id)
    if (!book) {
      return false
    } else {
      return book
    }
  }

  updateBook = (body: Book, id: string, file: any) => {
    const book = this.books.find((book) => book.id === id)
    if (!book) {
      return false
    } else {
      const updatedBook = {
        ...book,
        ...body,
        id,
        fileBook: `public/img/${file?.filename}`
      }
      this.books = this.books.map(book => {
        if (book.id === updatedBook.id) {
          return updatedBook
        }
        return book
      })
      return this.books
    }
  }

  deleteBook = (bookId: string) => {
    const book = this.books.find((book) => book.id === bookId)
    if (!book) {
      return false
    } else {
      this.books = this.books.filter((book) => {
        return book.id !== bookId
      })
      return this.books
    }
  }

  createBook = (book?: Book, file?: any) => {
    if (!book?.title) {
      return false
    } else {
      const generatedBook: Book = {
        ...book,
        fileBook: `public/img/${file?.filename}`,
        id: generateId()
      }
      this.books.push(generatedBook)
      return this.books
    }
  }

  getBookCover = (bookId: string) => {
    const book = this.books.find((book) => book.id === bookId)
    if (!book || !book.fileBook) {
      return false
    } else {
      const file = `${__dirname}/../${book.fileBook}`
      return file
    }
  }
}

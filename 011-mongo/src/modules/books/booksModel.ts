import {BookType} from "./BookType";
import {getMockBooks} from "../../utils/getMockBooks";
import {generateId} from "../../utils/generateId";
import {Book} from './BookSchema'

export class BooksModel {
  constructor() {}

  books: BookType[] = getMockBooks()

  getAllBooks = () => {
    return Book.find()
  };

  getBook = (id?: string) => {
    return Book.find({ id })
  }

  updateBook = async (body: BookType, id: string, file: any) => {
    try {
      const updatedFields = {
        ...body
      }
      if (file) {
        updatedFields.fileBook = `public/img/${file?.filename}`
      }
      return Book.updateOne({id}, {...updatedFields})
    } catch (e) {
      return false
    }
  }

  deleteBook = async (id: string) => {
    try {
      await Book.deleteOne({ id });
      return Book.find()
    } catch (e) {
      return false
    }
  }

  createBook = async (book?: BookType, file?: any) => {
    if (!book?.title) {
      return false
    } else {
      const generatedBook: BookType = {
        ...book,
        fileBook: `public/img/${file?.filename}`,
        id: generateId()
      }
      const newBook = new Book(generatedBook)
      try {
        return await newBook.save()
      } catch (e) {
        return e
      }
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

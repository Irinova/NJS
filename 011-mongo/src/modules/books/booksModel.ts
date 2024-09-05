import {BookType} from "./BookType";
import {generateId} from "../../utils/generateId";
import {Book} from './BookSchema'

export class BooksModel {
  constructor() {}

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

  getBookCover = async (id: string) => {
    const fileBook = Book.find({ id }).select('fileBook')
    if (!fileBook) {
      return false
    } else {
      return `${__dirname}/../${fileBook}`
    }
  }
}

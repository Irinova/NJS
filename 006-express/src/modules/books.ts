import {Book} from "../types/Book";
import Users from "./user";
import {getMockBooks} from "../utils/getMockBooks";
import {generateId} from "../utils/generateId";

const express = require("express");
// @ts-ignore
const router = express.Router();

class Books {

  constructor() {}

  data: Book[] = getMockBooks()

  getAllBooks() {
    router.get("/", (req: any, res: any) => {
      res.json(this.data)
    });
  }

  getBook() {
    router.get("/:id", (req: any, res: any) => {
      const id = req.params?.id
      const book = this.data.find((book) => book.id === id)
      if (!book) {
        res.send(404)
      } else {
        res.json(book)
      }
    });
  }

  updateBook() {
    router.put("/:id", (req: any, res: any) => {
      const updatedBookFields = req.body
      const book = this.data.find((book) => book.id === updatedBookFields?.id)
      if (!book) {
        res.send(404)
      } else {
        const updatedBook = {
          ...book,
          ...updatedBookFields
        }
        this.data = this.data.map(book => {
          if (book.id === updatedBook.id) {
            return updatedBook
          }
          return book
        })
        res.json(updatedBook)
      }
    });
  }

  deleteBook() {
    router.delete("/:id", (req: any, res: any) => {
      const deletedBookId = req.params?.id
      const book = this.data.find((book) => book.id === deletedBookId)
      if (!book) {
        res.send(404)
      } else {
        this.data = this.data.filter((book) => {
          return book.id !== deletedBookId
        })
        res.json(this.data)
      }
    });
  }

  createBook() {
    router.post("/", (req: any, res: any) => {
      const book = req.body
      if (!book.title) {
        res.send(500)
      } else {
        const generatedBook = {
          ...book,
          id: generateId()
        }
        this.data.push(generatedBook)
        res.json(generatedBook)
      }
    });
  }

  generateRoutes(user: Users) {
    router.get("*", (req: any, res: any, next: any) => {
      if (!user.currentUser()) {
        res.send(401)
      } else {
        next()
      }
    });
    this.getBook()
    this.getAllBooks()
    this.createBook()
    this.updateBook()
    this.deleteBook()
    return router
  }
}

export default Books

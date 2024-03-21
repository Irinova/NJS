import { Book } from "../types/Book";
import Users from "./user";
import { getMockBooks } from "../utils/getMockBooks";
import { generateId } from "../utils/generateId";
import { Router } from "express";
const fileMulter = require('../middleware/file');
const express = require("express");

class Books {
  router
  constructor() {
    // @ts-ignore
    this.router = express.Router();
  }

  data: Book[] = getMockBooks()

  private getAllBooks() {
    this.router.get("/", (req, res) => {
      res.json(this.data)
    });
  }

  private getBook() {
    this.router.get("/:id", (req, res) => {
      const id = req.params?.id
      const book = this.data.find((book) => book.id === id)
      if (!book) {
        res.send(404)
      } else {
        res.json(book)
      }
    });
  }

  private updateBook() {
    this.router.put("/:id", fileMulter.single('cover-img'),(req, res) => {
      const updatedBookFields = req.body
      const id = req.params?.id
      const book = this.data.find((book) => book.id === id)
      if (!book) {
        res.send(404)
      } else {
        const updatedBook = {
          ...book,
          ...updatedBookFields,
          id,
          fileBook: `public/img/${req.file?.filename}`
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

  private deleteBook() {
    this.router.delete("/:id", (req, res) => {
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

  private createBook() {
    this.router.post("/", fileMulter.single('cover-img'), (req, res) => {
      const book = req.body
      if (!book.title) {
        res.send(500)
      } else {
        const generatedBook: Book = {
          ...book,
          fileBook: `public/img/${req.file?.filename}`,
          id: generateId()
        }
        this.data.push(generatedBook)
        res.json(generatedBook)
      }
    });
  }
  private getBookCover() {
    this.router.get("/:id/download", (req, res) => {
      const bookId = req.params?.id
      const book = this.data.find((book) => book.id === bookId)
      if (!book || !book.fileBook) {
        res.send(404)
      } else {
        const file = `${__dirname}/../${book.fileBook}`
        res.download(file)
      }
    });
  }

  generateRoutes(user: Users): Router {
    this.router.get("*", (req: any, res: any, next: any) => {
      if (!user.currentUser()) {
        res.send(401)
      } else {
        next()
      }
    });
    this.getBookCover()
    this.getBook()
    this.getAllBooks()
    this.createBook()
    this.updateBook()
    this.deleteBook()
    return this.router
  }
}

export default Books

import { Express } from "express";
import { createBooksRouter } from "../routes/books";
import BooksController from "../controllers/booksController";
import {User} from "../types/User";

class Books {
  controller
  constructor(app: Express, currentUser: () => User | undefined, client: any) {
    this.controller = new BooksController()
    app.use('/api/books', createBooksRouter(this.controller, currentUser, client))
    app.use((err: any, req: any, res: any, next: any) => {
      console.error(err)
      next()
    })
  }
}

export default Books

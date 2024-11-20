import { Express } from "express";
import { createBooksRouter } from "./booksRoutes";
import BooksController from "./booksController";
import {UserType} from "../user/UserType";

class Books {
  controller
  constructor(app: Express, currentUser: () => UserType | undefined, client) {
    this.controller = new BooksController()
    app.use('/api/books', createBooksRouter(this.controller, currentUser, client))
    app.use((err: any, req: any, res: any, next: any) => {
      console.error(err)
      next()
    })
  }
}

export default Books

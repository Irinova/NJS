import { Express } from "express";
import { createScreensRouter } from "./screensRoutes";
import ScreensController from "./screensController";
import User from "../user/user";
import {BooksModel} from "../books/booksModel";

class Screens {
  constructor(app: Express, user: User, booksModel: BooksModel) {
    const controller = new ScreensController()
    app.use('/', createScreensRouter(controller, user, booksModel))
    app.use((err: any, req: any, res: any, next: any) => {
      console.error(err)
      next()
    })
  }
}

export default Screens

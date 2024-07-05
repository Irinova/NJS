import { Express } from "express";
import { createScreensRouter } from "../routes/screens";
import ScreensController from "../controllers/screensController";
import User from "../modules/user";
import {BooksModel} from "../models/booksModel";

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

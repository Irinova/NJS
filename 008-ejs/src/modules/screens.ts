import { Express } from "express";
import { createScreensRouter } from "../routes/screens";
import ScreensController from "../controllers/screensController";
import {User} from "../types/User";
import {BooksModel} from "../models/booksModel";

class Screens {
  constructor(app: Express, currentUser: () => User | undefined, booksModel: BooksModel) {
    const controller = new ScreensController()
    app.use('/', createScreensRouter(controller, currentUser, booksModel))
    app.use((err: any, req: any, res: any, next: any) => {
      console.error(err)
      next()
    })
  }
}

export default Screens

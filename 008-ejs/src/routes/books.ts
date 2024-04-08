import { Router } from "express";
import BooksController from "../controllers/booksController";
import {User} from "../types/User";
const fileMulter = require('../middleware/file');

export const createBooksRouter = (booksController: BooksController, currentUser: () => User | undefined): Router => {
  const router = Router();
  router.get("*", (req: any, res: any, next: any) => {
    if (!currentUser()) {
      res.send(401)
    } else {
      next()
    }
  })
  router.get("/", booksController.getAllBooks)
  router.get("/:id", booksController.getBook)
  router.put("/:id", fileMulter.single('cover-img'), booksController.updateBook)
  router.delete("/:id", booksController.deleteBook)
  router.post("/", fileMulter.single('cover-img'), booksController.createBook)
  router.get("/:id/download", booksController.getBookCover)
  return router
}

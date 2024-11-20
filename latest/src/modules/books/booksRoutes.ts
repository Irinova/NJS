import { Router } from "express";
import BooksController from "./booksController";
import {UserType} from "../user/UserType";
const fileMulter = require('../../middleware/file');

export const createBooksRouter = (booksController: BooksController, currentUser: () => UserType | undefined, client: any): Router => {
  const router = Router();
  router.get('*',
    (req: any, res, next) => {
      console.log('req.isAuthenticated111', req.isAuthenticated())
      if (!req.isAuthenticated()) {
        return res.sendStatus(401)
      }
      next()
    }
)
  router.get("/", booksController.getAllBooks)
  router.get("/:id", booksController.getBook)
  router.get("/:id/incr", (req, res) => booksController.getCounter(req, res, client))
  router.put("/:id", fileMulter.single('cover-img'), booksController.updateBook)
  router.delete("/:id", booksController.deleteBook)
  router.post("/", fileMulter.single('cover-img'), booksController.createBook)
  router.post("/:id/incr", (req, res) => booksController.updateCounter(req, res, client))
  router.get("/:id/download", booksController.getBookCover)
  return router
}

import { Router } from "express";
import User from "../user/user";
import ScreensController from "./screensController";
import {BooksModel} from "../books/booksModel";
const fileMulter = require('../../middleware/file');

export const createScreensRouter = (screensController: ScreensController, user: User, booksModel: BooksModel): Router => {
  const router = Router();

  router.get("/", (req, res) => screensController.loginView(req, res))
  router.post("/", (req, res) => user.setUser(req, res))

  router.get("/books/", (req, res) => screensController.getAllBooksView(req, res, booksModel))
  router.get("/books/:id", (req, res) => screensController.getBookView(req, res, booksModel))
  router.post("/update/:id", fileMulter.single('cover-img'), (req, res) => {
    if (!user.currentUser()) {
      res.render('../src/views/books/failure', { title: 'Ошибка' })
    }
    screensController.updateBook(req, res, booksModel)
  })
  router.get("/update/:id", (req, res) => {
    screensController.updateBookView(req, res, booksModel)
  })
  router.get("/create", (req, res) => {
    screensController.createBookView(req, res)
  })
  router.post("/create", fileMulter.single('cover-img'), (req, res) => {
    if (!user.currentUser()) {
      res.render('../src/views/books/failure', { title: 'Ошибка' })
    }
    screensController.createBook(req, res, booksModel)
  })
  return router
}

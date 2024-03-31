import { Router } from "express";
import BooksController from "../controllers/booksController";
import {User} from "../types/User";
import ScreensController from "../controllers/screensController";
import {BooksModel} from "../models/booksModel";
const fileMulter = require('../middleware/file');

export const createScreensRouter = (screensController: ScreensController, currentUser: () => User | undefined, booksModel: BooksModel): Router => {
  const router = Router();
  router.get("/books/", (req, res) => screensController.getAllBooks(req, res, booksModel))
  router.get("/books/:id", (req, res) => screensController.getBook(req, res, booksModel))
  router.post("/update/:id", fileMulter.single('cover-img'), (req, res) => {
    screensController.updateBook(req, res, booksModel)
  })
  router.get("/update/:id", fileMulter.single('cover-img'), (req, res) => {
    screensController.updateBookView(req, res, booksModel)
  })
  router.get("/create", fileMulter.single('cover-img'), (req, res) => {
    screensController.createBookView(req, res)
  })
  router.post("/create", fileMulter.single('cover-img'), (req, res) => {
    screensController.createBook(req, res, booksModel)
  })
  return router
}

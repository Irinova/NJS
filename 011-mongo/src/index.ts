import express, { Express } from "express";
import User from "./modules/user/user";
import Books from "./modules/books/books";
import Screens from "./modules/screens/screens";
import { Book } from "./modules/books/BookSchema";

const mongoose = require('mongoose');

const app: Express = express();
const port = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL;

let client;

const initializeMongoDB = async () => {
  try {
    client = await mongoose.connect(MONGODB_URL);
  } catch(e) {
    console.error(e)
  }
}


initializeMongoDB().then(() => {
  app.use(express.json())
  app.set("view engine", "ejs");
  app.use(express.urlencoded());
  app.use('/public', express.static(__dirname+'/public'))

  const user = new User(app)
  const books = new Books(app, user.currentUser, client)
  const screens = new Screens(app, user, books.controller.booksModel)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

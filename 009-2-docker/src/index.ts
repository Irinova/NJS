import express, { Express } from "express";
import User from "./modules/user";
import Books from "./modules/books";
import Screens from "./modules/screens";

const redis = require('redis')

const app: Express = express();
const port = process.env.PORT || 4000;
const REDIS_URL = process.env.REDIS_URL;

let client;

const initializeRedis = async () => {
  try {
    client = await redis.createClient({ url: REDIS_URL });
    await client.connect();
  } catch(e) {
    console.error(e)
  }
}


initializeRedis().then(() => {
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

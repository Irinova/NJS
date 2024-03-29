import express, { Express } from "express";
import User from "./modules/user";
import Books from "./modules/books";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/public', express.static(__dirname+'/public'))

const user = new User(app)
const books = new Books(app, user.currentUser)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

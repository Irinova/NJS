import express, { Express } from "express";
import Users from "./modules/user";
import Books from "./modules/books";

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json())

const users = new Users()
const books = new Books()

app.use('/public', express.static(__dirname+'/public'))
app.use('/api/user', users.generateRoutes());
app.use('/api/books', books.generateRoutes(users));
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err)
  next()
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

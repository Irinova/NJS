import {User} from "../types/User";

const express = require("express");
// @ts-ignore
const router = express.Router();

class Users {

  constructor() {}

  data: User[] = [
    { name: 'Ivan', password: '123' },
    { name: 'Elena', password: '345' },
  ]
  user?: User

  currentUser(): User | undefined {
    return this.user
  }

  findUser = (userData: User) => {
    return this.data.find((user) => {
      return user.password === userData.password && user.name === userData.name
    })
  }
  setCurrentUser = (user: User) => {
    if (user) {
      this.user = user
    }
  }
  clearCurrentUser = () => {
    this.user = undefined
  }

  post() {
    router.post("/login", (req: any, res: any) => {
      const name = req.body?.name
      const password = req.body?.password
      const user = this.findUser( { name, password })
      if (user) {
        this.setCurrentUser(user)
        res.json(user)
      } else {
        this.clearCurrentUser()
        res.json('Произошла ошибка')
      }
    });
  }

  generateRoutes() {
    this.post()
    return router
  }
}

export default Users

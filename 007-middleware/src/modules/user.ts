import { User } from "../types/User";
import { Router } from "express";
const express = require("express");

class Users {
  router
  constructor() {
    // @ts-ignore
    this.router = express.Router();
  }

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

  private post() {
    this.router.post("/login", (req: any, res: any) => {
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

  generateRoutes(): Router {
    this.post()
    return this.router
  }
}

export default Users

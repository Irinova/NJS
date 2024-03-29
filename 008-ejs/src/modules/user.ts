import { User } from "../types/User";
import UserController from "../controllers/userController";
import {Express} from "express";
import {createUserRouter} from "../routes";

class Users {
  controller
  constructor(app: Express) {
    this.controller = new UserController()
    app.use('/api/user', createUserRouter(this.controller))
    app.use((err: any, req: any, res: any, next: any) => {
      console.error(err)
      next()
    })
  }
  currentUser = (): User | undefined =>  {
    return this.controller.currentUser()
  }
}

export default Users

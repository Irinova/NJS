import {UsersModel} from "../models/usersModel";
import {User} from "../types/User";

class UserController {
  usersModel
  constructor() {
    this.usersModel = new UsersModel()
  }

  currentUser(): User | undefined {
    return this.usersModel.currentUser()
  }

  post = (req: any, res: any) => {
    const name = req.body?.name
    const password = req.body?.password
    const user = this.usersModel.findUser( { name, password })
    if (user) {
      this.usersModel.setCurrentUser(user)
      res.json(user)
    } else {
      this.usersModel.clearCurrentUser()
      res.json('Произошла ошибка')
    }
  }

}

export default UserController

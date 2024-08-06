import { User } from "../types/User";

export class UsersModel {
  constructor() {}
  users: User[] = [
    { name: 'Ivan', password: '123' },
    { name: 'Elena', password: '345' },
  ]

  user?: User

  currentUser(): User | undefined {
    return this.user
  }

  findUser = (userData: User) => {
    return this.users.find((user) => {
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
}

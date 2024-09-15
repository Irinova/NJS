import { UserType } from "./UserType";

export class UsersModel {
  constructor() {}
  users: UserType[] = [
    { name: 'Ivan', password: '123' },
    { name: 'Elena', password: '345' },
  ]

  user?: UserType

  currentUser(): UserType | undefined {
    return this.user
  }

  findUser = (userData: UserType) => {
    return this.users.find((user) => {
      return user.password === userData.password && user.name === userData.name
    })
  }
  setCurrentUser = (user: UserType) => {
    if (user) {
      this.user = user
    }
  }
  clearCurrentUser = () => {
    this.user = undefined
  }
}

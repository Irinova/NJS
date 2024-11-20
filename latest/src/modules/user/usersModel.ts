import { User } from "./UserSchema";
import { UserType } from "./UserType";

export class UsersModel {
  constructor() {}

  findUser = async (userData: UserType) => {
    const { name, password } = userData;
    return User.find({ name, password });
  };

  createUser = async (user?: UserType) => {
    if (!user?.name) {
      return false
    } else {
      const newUser = new User(user)
      try {
        return await newUser.save()
      } catch (e) {
        return e
      }
    }
  }
}

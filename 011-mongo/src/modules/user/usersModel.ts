import { User } from "./UserSchema";
import { UserType } from "./UserType";
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

export class UsersModel {
  constructor() {}

  user?: UserType;

  currentUser(): UserType | undefined {
    return this.user;
  }

  findUser = async (userData: UserType) => {
    const { name, password } = userData;
    return User.find({ name, password });
  };

  setCurrentUser = (user: UserType) => {
    if (user) {
      this.user = user;
    }
  };

  clearCurrentUser = () => {
    this.user = undefined;
  };
}

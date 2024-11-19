import { UsersModel } from "./usersModel";
import { UserType } from "./UserType";

class UserController {
  usersModel;
  constructor() {
    this.usersModel = new UsersModel();
  }

  currentUser(): UserType | undefined {
    return this.usersModel.currentUser();
  }

  setUser(req, res) {
    const { name, password } = req.body;
    const foundUser = this.usersModel.findUser({ name, password });
    if (foundUser) {
      this.usersModel.setCurrentUser(foundUser);
      res.redirect("/books");
    }
    res.render("../src/views/books/failure", { title: "Ошибка" });
  }

  verify = async (name, password, done) => {
    const user = await this.usersModel.findUser({ name, password });
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  };

  login = async (req: any, res: any) => {
    const name = req.body?.name;
    const password = req.body?.password;
    const user = await this.usersModel.findUser({ name, password });
    console.log("user", user.password);
    if (user) {
      // this.usersModel.setCurrentUser(user);
      res.json(user);
    } else {
      this.usersModel.clearCurrentUser();
      res.json("Произошла ошибка");
    }
  };
}

export default UserController;

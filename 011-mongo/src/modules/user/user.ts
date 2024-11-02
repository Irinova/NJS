import { UserType } from "./UserType";
import UserController from "./userController";
import { Express } from "express";
const passport = require("passport");
const session = require('express-session')
import { createUserRouter } from "./userRoutes";
const LocalStrategy = require("passport-local").Strategy;

class Users {
  controller;
  constructor(app: Express) {
    this.controller = new UserController();

    const options = {
      usernameField: "name",
      passwordField: "password",
    }

    passport.use("local", new LocalStrategy(options, this.controller.verify));

    passport.serializeUser(function(user, done) {
      done(null, user);
    });
    
    passport.deserializeUser(function(user, done) {
      done(null, user);
    });

    app.use(session({ secret: 'SECRET'}));

    app.use(passport.initialize())
    app.use(passport.session())

    app.use("/api/user", createUserRouter(this.controller));
    app.use((err: any, req: any, res: any, next: any) => {
      console.error(err);
      next();
    });
  }
  currentUser = (): UserType | undefined => {
    return this.controller.currentUser();
  };
  setUser = (req, res): UserType | undefined => {
    return this.controller.setUser(req, res);
  };
}

export default Users;

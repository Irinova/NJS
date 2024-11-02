import { Router } from "express";
const passport = require("passport");
import UserController from "./userController";

export const createUserRouter = (usersController: UserController): Router => {
  const router = Router();
  router.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    (req, res) => {
      console.log("req.user: ", (req as any).user);
      res.redirect("/");
    }
  );
  return router;
};

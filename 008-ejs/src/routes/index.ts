import {Router} from "express";
import UserController from "../controllers/userController";

export const createUserRouter = (usersController: UserController): Router => {
  const router = Router();
  router.post("/login", usersController.post)
  return router
}

import { Router } from "express";
import {
  findAllUsersController,
  findUserController,
  createUserController,
  updateUserController,
  removeUserController,
} from "../controllers/user.controller.js";

const userRouter : Router = Router();

userRouter.get("/", findAllUsersController);
userRouter.get("/:id", findUserController);
userRouter.post("/", createUserController)
userRouter.patch("/:id", updateUserController);
userRouter.delete("/:id", removeUserController);


export default userRouter;
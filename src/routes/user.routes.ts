import { Router } from "express";
import { findAllUser, findUser } from "../controllers/user.controller.js";

const userRouter : Router = Router();

userRouter.get("/", findAllUser);

userRouter.get("/:id", findUser);

// userRouter.post("/", createUser);

export default userRouter;
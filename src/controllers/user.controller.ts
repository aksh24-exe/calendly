import {
  createUser as createUserSevice,
  findAllUser as findAllUserService,
  findById as findByIdService,
  updateUser as updateUserService,
  deleteUser as deleteUserService
} from "../services/user.service.js";
import { Request, Response } from "express";
import { badRequestError } from "../utils/api-error.js";
import { successResponse } from "../utils/api-response.js";

export const findAllUsersController = async (_req: Request, res: Response) => {
    const response = await findAllUserService();
    successResponse(res, response)
}

export const findUserController = async (req: Request, res: Response,) => {
  const id = Number(req.params.id);
  if (!id) throw badRequestError("Invalid user ID"); 
  const response = await findByIdService(id);
  successResponse(res, response)
};


export const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserSevice(req.body);
  successResponse(res,newUser, 201, 'User create successfully')
}

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateUser = await updateUserService(Number(id), req.body);
  successResponse(res, updateUser)
}

export const removeUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const removeUser = await deleteUserService(Number(id))
  successResponse(res, removeUser)
}

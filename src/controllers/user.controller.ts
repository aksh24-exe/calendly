import { getUser, users } from "../services/user.service.js"
import { Request, Response } from "express";
import { badRequestError } from "../utils/api-error.js";

export const findAllUser = async (_req: Request, res: Response) => {
    const response = await users()
    res.json(response)
}

export const findUser = async (
  req: Request,
  res: Response,
) => {
  const id = Number(req.params.id);

  if (!id) {
    throw badRequestError("Invalid user ID"); // errorHandler handle karega
  }
  const response = await getUser(id);
  res.json(response);
};


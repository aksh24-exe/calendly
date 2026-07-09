import { Request, Response, NextFunction } from "express"
import { notFoundError } from "../utils/api-error.js";

export const routeNotFound = (_req: Request, _res: Response, next: NextFunction): void => {
    next(notFoundError("Route not found"));
}
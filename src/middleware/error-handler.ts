import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/api-error.js";
import { NODE_ENV } from "../config/env.js";


export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
    if (err instanceof ApiError) {
        const body: Record<string, unknown> = {
            success: false,
            message: err.message
        }
        console.log(err.details)
        if (err.details) body.details = err.details;

        return res.status(err.statusCode).json(body)
    }

    console.error('[error', err)
    
    const body: Record<string, unknown> = {
        success: false,
        message: "Internal Server Error"
    }

    if (NODE_ENV === "development") body.details = err.stack;
    
    return res.status(500).json(body);
}
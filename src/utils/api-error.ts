export class ApiError extends Error {
    readonly statusCode: number;
    readonly details?: unknown;

    constructor(statusCode: number, message: string, details?: unknown) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.details = details;
        this.name = "ApiError";
        Error.captureStackTrace(this, this.constructor)
    }
}


export const notFoundError = (message: string, details?: unknown) => new ApiError(404, message, details);
export const badRequestError = (message: string, details?: unknown) => new ApiError(400, message, details);
export const unauthorizedError = (message: string, details?: unknown) => new ApiError(401, message, details);
export const forbiddenError = (message: string, details?: unknown) => new ApiError(403, message, details);
export const internalServerError = (message: "Internal Server Error") => new ApiError(500, message);
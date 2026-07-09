import { Response } from "express";

interface SuccessPayload<T> {
    success: true,
    data: T,
    details?: string
}

export const successResponse = <T> (
  res: Response,
  data: T,
  statusCode = 200,
  details?: string,
): void => {
  const body: SuccessPayload<T> = {
    success: true,
    data,
  };

  if (details) body.details = details;

  res.status(statusCode).json(body);
};
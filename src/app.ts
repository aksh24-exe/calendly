import express from "express";
import type { Request, Response, Express } from "express";
import userRouter from "./routes/user.routes.js";
import { errorHandler } from "./middleware/error-handler.js";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded());
app

app.use("/api/v1/users", userRouter);

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ message: "OK", timestamp: new Date().toISOString() });
});



app.use(errorHandler);
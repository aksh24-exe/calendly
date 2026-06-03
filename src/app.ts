import express from "express";
import type { Request, Response, Express } from "express";

export const app: Express = express();

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ message: "OK", timestamp: new Date().toISOString() });
});


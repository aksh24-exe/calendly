import { Router } from "express";
import { createController, findAllEventByHostIdController, findAllEventsController, findEventByIdController, removeController, updateController } from "../controllers/event.controller.js";

 export const eventRoute: Router = Router();

eventRoute.get("/", findAllEventsController);
eventRoute.get("/:id", findEventByIdController);
eventRoute.get("/host/:id", findAllEventByHostIdController);
eventRoute.post("/", createController);
eventRoute.patch("/:id", updateController);
eventRoute.delete("/:id", removeController);
import { Request, Response } from "express";
import {
  findAllEvents as findAllEventsServices,
  findEventById as findEventByIdServices,
  findAllEventByHostId as getAllEventByHostIdService,
  createEvents as createEventsService,
  updateEvent as updateEventService,
  deleteEvent as deleteEventService,
} from "../services/event.service.js";
import { successResponse } from "../utils/api-response.js";


export const findAllEventsController = async (_req: Request, res: Response) => {
    const allEvents = await findAllEventsServices();
    successResponse(res, allEvents)
}

export const findEventByIdController = async (req: Request, res: Response) => {
    const { id } = req.params
    const event = await findEventByIdServices(Number(id))
    successResponse(res, event)
}

export const findAllEventByHostIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const allEvents = await getAllEventByHostIdService(Number(id));
    successResponse(res, allEvents)
}

export const createController = async (req: Request, res: Response) => {
    const event = await createEventsService(req.body);
    successResponse(res, event);
}

export const updateController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const event = await updateEventService(Number(id), req.body);
    successResponse(res, event)
}

export const removeController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const event = await deleteEventService(Number(id));
    successResponse(res, event)
}
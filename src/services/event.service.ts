import { createEventDTO, updateEventDTO } from "../dtos/event.dto.js";
import {
  getAllEvents,
  getEventById,
  getAllEventByHostId,
  create,
  update,
} from "../repositories/event.repository.js";
import { remove } from "../repositories/user.repository.js";


export const findAllEvents = async () => {
    const allEvents = await getAllEvents();
    return allEvents;
}

export const findEventById = async (id: number) => {
    const event = await getEventById(id);
    return event;
}

export const findAllEventByHostId = async (id: number) => {
    const allEvents = await getAllEventByHostId(id);
    return allEvents;
}

export const createEvents = async (data: createEventDTO) => {
    const event = await create(data);
    return event;
}

export const updateEvent = async (id: number, data: updateEventDTO) => {
    const event = await update(id, data);
    return event
}

export const deleteEvent = async (id: number) => {
    const event = await remove(id)
    return event
}
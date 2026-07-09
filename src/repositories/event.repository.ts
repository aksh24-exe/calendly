import { prisma } from "../config/database.js"
import { createEventDTO, updateEventDTO } from "../dtos/event.dto.js"
import { notFoundError } from "../utils/api-error.js";


export const getAllEvents = async () => {
    const allEvents = await prisma.event.findMany();
    return allEvents;
}

export const getEventById = async (id: number) => {
    const event = await prisma.event.findUnique({
        where: { id }
    });
    return event;
}

export const getAllEventByHostId = async (id: number) => {
    const allEvents = await prisma.event.findMany({
        where: {
            hostId: id
        }
    });
    return allEvents;
}

export const create = async (data: createEventDTO) => {
    const createEvent = await prisma.event.create({ data });
    return createEvent;
}

export const update = async (id: number, data: updateEventDTO) => {
    const event = await getEventById(id);

    if (!event) throw notFoundError("Event not found");
    const updateEvent = await prisma.event.update({
        where: { id },
        data
    });
    return updateEvent
}

export const remove = async (id: number) => {
    const event = await getEventById(id);

    if (!event) throw notFoundError("Event not found");
    const removeEvent = await prisma.event.delete({ where: { id } })
    return removeEvent
}
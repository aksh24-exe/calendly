import z from "zod";


export const createEventSchema = z.object({
  hostId: z.number("HostId is required"),
  title: z.string("Title is required"),
  describe: z.string().optional(),
  isActive: z.boolean().optional(),
  locationType: z.string().optional(),
  locationString: z.string("Location is required"),
  bufferBeforeMinutes: z.number().optional(),
  bufferAfterMinute: z.number().optional()
});

export const updateEventSchema = z
  .object({
    title: z.string("Title is required").optional(),
    describe: z.string().optional(),
    isActive: z.boolean().optional(),
    locationType: z.string().optional(),
    locationString: z.string("Location is required").optional(),
    bufferBeforeMinutes: z.number().optional(),
    bufferAfterMinute: z.number().optional(),
  })
  .refine((data) => data.title !== undefined, {
    message: "At least one field must be provide",
  });

export type createEventDTO = z.infer<typeof createEventSchema>
export type updateEventDTO = z.infer<typeof updateEventSchema>

import z from "zod";


export const createUserSchema = z.object({
    email: z.email("Invalid email address"),
    name: z.string().min(1, "Name is required"),
})

export const updateUserSchema = z.object({
    email: z.email("Invalid email address").optional(),
    name: z.string().min(1, "Name is required").max(100, "Name must be less then 100 character").optional()
}).refine((data) => data.email !== undefined || data.name !== undefined, {
    message: "At least one field must be provide"
})

export type createUserDTO = z.infer<typeof createUserSchema>;

export type updateUserDTO = z.infer<typeof updateUserSchema>;
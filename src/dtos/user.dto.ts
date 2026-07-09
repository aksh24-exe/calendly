import z from "zod";


export const userSchema = z.object({
    email: z.email("Invalid email address"),
    name: z.string().min(1, "Name is required"),
})

export type UserDTO = z.infer<typeof userSchema>;
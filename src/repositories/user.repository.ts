import { prisma } from "../config/database.js";


export async function getALL() {
    const users = await prisma.user.findMany()
    return users
}

export async function getOneUser(id: number) {
    try {
        const user = await prisma.user.findFirst({
          where: { id },
        });
        return user;
    } catch (error) {
        console.error(error)
    }
}
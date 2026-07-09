import { prisma } from "../config/database.js";
import { createUserDTO, updateUserDTO } from "../dtos/user.dto.js";


export async function getALL() {
    const users = await prisma.user.findMany()
    return users
}

export async function getById(id: number) {
    const user = await prisma.user.findFirst({
        where: { id },
    });
    
    return user;
}

export async function findByEmail(email: string) {
    const user = await prisma.user.findUnique({
        where: { email }
    })

    return user;
}

export async function create(data: createUserDTO & { slug: string }) {
    const user = await prisma.user.create({
       data
    })
    
    return user
}

export async function update(id: number, data: updateUserDTO) {
    const user = await prisma.user.update({
      where: { id },
      data,
    });

    return user
}

export async function remove(id: number) {
    const user = await prisma.user.delete({
        where: { id}
    })
    return user
}
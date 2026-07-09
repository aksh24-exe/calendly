import { createUserDTO, updateUserDTO } from "../dtos/user.dto.js";
import { create, findByEmail, getALL, getById, remove, update } from "../repositories/user.repository.js";
import { badRequestError, notFoundError } from "../utils/api-error.js";

export const findAllUser = async () => {
    const users = await getALL();
    return users;
}

export const findById = async (id: number) => {
    const user = await getById(id);
    if (!user) {
        throw notFoundError("User not found");
  }
  return user;
};

export const createUser = async (data: createUserDTO) => {
    const user = await findByEmail(data.email);
    if (user) throw badRequestError("User already exist");

    const slugPassed = data.email;
    return create({ ...data, slug: slugPassed });

};

export const updateUser = async (id: number, data: updateUserDTO) => {
    const user = await getById(id);

    if (!user) throw notFoundError("User not found");

    return update(id, {...data})
}

export const deleteUser = async (id: number) => {
    const user = await getById(id);

    if (!user) throw notFoundError("User not found");
    
    return remove(id)
}
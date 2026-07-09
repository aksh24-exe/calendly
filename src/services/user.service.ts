import { getALL, getOneUser } from "../repositories/user.repository.js";
import { notFoundError } from "../utils/api-error.js";

export const users = async () => {
    const users = await getALL();
    return users;
}

export const getUser = async (id: number) => {
    const user = await getOneUser(id);
    if (!user) {
        throw notFoundError("User not found");
  }
  return user;
};
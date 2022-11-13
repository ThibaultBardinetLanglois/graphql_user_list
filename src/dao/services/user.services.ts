import { Repository } from "typeorm";
import Skill from "../../dao/entities/Skill.entities";
import User from "../../dao/entities/User.entities";
import dataSource from "../../config/typeorm";

const userRepository: Repository<User> = dataSource.getRepository(User);
const skillRepository: Repository<Skill> = dataSource.getRepository(Skill);


/**
 * Retrieve all users from db.
 * @returns users array
 */
export const getAll = async (): Promise<User[]> => {
  return await userRepository.find({
    relations: {
      skillToUser: true,
    },
  });
}

/**
 * Retrieve a user by its id from db.
 * @returns users 
 */
 export const getById = async (id: number): Promise<User | null> => {
  return await userRepository.findOneBy({
    id,
  });
}

/**
 * Create a new user
 * @param userRequest user params
 * @returns the created user
 */
export const create = async (userRequest: User): Promise<User> => {
  return await userRepository.save(userRequest);
}

/**
 * Update an existing user.
 * @param userRequest new user data
 * @param userId existing user id
 * @returns updated user
 */
export const updateUser =  async (
  userRequest: User,
  userId: number
): Promise<User | null> => {
  await userRepository.update(userId, userRequest);
  return await userRepository.findOneBy({
    id: userId,
  });
}

/**
 * Delete an existing user.
 * @param userId user id to delete
 * @returns
 */
export const deleteUser = async (userId: number): Promise<any> => {
  return await userRepository.delete(userId);
}

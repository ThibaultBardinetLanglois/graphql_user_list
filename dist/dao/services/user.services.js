"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.create = exports.getAll = void 0;
const Skill_entities_1 = __importDefault(require("../../dao/entities/Skill.entities"));
const User_entities_1 = __importDefault(require("../../dao/entities/User.entities"));
const typeorm_1 = __importDefault(require("../../config/typeorm"));
const userRepository = typeorm_1.default.getRepository(User_entities_1.default);
const skillRepository = typeorm_1.default.getRepository(Skill_entities_1.default);
/**
 * Retrieve all users from db.
 * @returns users array
 */
const getAll = async () => {
    return await userRepository.find({
        relations: {
            skillToUser: true,
        },
    });
};
exports.getAll = getAll;
/**
 * Create a new user
 * @param userRequest user params
 * @returns the created user
 */
const create = async (userRequest) => {
    return await userRepository.save(userRequest);
};
exports.create = create;
/**
 * Update an existing user.
 * @param userRequest new user data
 * @param userId existing user id
 * @returns updated user
 */
const updateUser = async (userRequest, userId) => {
    await userRepository.update(userId, userRequest);
    return await userRepository.findOneBy({
        id: userId,
    });
};
exports.updateUser = updateUser;
/**
 * Delete an existing user.
 * @param userId user id to delete
 * @returns
 */
const deleteUser = async (userId) => {
    return await userRepository.delete(userId);
};
exports.deleteUser = deleteUser;

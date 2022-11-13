"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkill = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const Skill_entities_1 = __importDefault(require("../entities/Skill.entities"));
const typeorm_1 = __importDefault(require("../../config/typeorm"));
const customError_types_1 = require("../../types/customError.types");
const skillRepository = typeorm_1.default.getRepository(Skill_entities_1.default);
// const skillToUserRepository = databaseConfig.getRepository(SkillToUser);
//***************  CRUD  ********************
//**********************************************
/**
 * Returns all skills from database
 * @returns Skill[]
 */
const getAll = async () => {
    const skills = await skillRepository.find();
    if (skills !== null) {
        return skills;
    }
    else {
        throw new Error(`There is a problem to load skills from the database`);
    }
};
exports.getAll = getAll;
/**
 * Returns a skill by its id from database
 *
 * @param {number} id The id to use to retrieve a specific skill
 * @returns skill
 */
const getById = async (id) => {
    const isSkillExist = await skillRepository.findOneBy({
        id: id
    });
    if (isSkillExist && Object.keys(isSkillExist).length > 0) {
        return isSkillExist;
    }
    else {
        throw new Error(`The skill with the id ${id} doesn't exist in database`);
    }
};
exports.getById = getById;
/**
 * Retrieve a skill by name.
 * @param name skill name
 * @returns the skill if exist null otherwise
 */
const getByName = async (name) => {
    return await skillRepository.findOneBy({
        name,
    });
};
/**
 * Create and return a skill
 * @param name skill name {
      constructor(parameters) {
      name: string
      }
    }}
    @returns created skill
  */
const create = async (name) => {
    const isSkillExist = await getByName(name);
    if (isSkillExist && Object.keys(isSkillExist).length > 0) {
        throw new Error(`The skill ${name} already exist in database`);
    }
    return await skillRepository.save({ name });
};
exports.create = create;
/**
 * Update a skill in database and return it
 *
 * @param {number} skillId
 * @param {class} skill
 * @returns updated skill
 */
const update = async (skillId, skill) => {
    const isNameAlreadyExist = await skillRepository.findOneBy({
        name: skill.name
    });
    const skillToUpdate = await skillRepository.findOneBy({
        id: skillId
    });
    if (isNameAlreadyExist && Object.keys(isNameAlreadyExist).length > 0) {
        throw new Error(`You cannot set a name which already exist in database, choose another name than ${skill.name}`);
    }
    else if (skillToUpdate !== null && Object.keys(skillToUpdate).length > 0) {
        const updatedSkill = { ...skillToUpdate, ...skill };
        return await skillRepository.save(updatedSkill);
    }
    else {
        throw new Error(`Problem to update skill with id ${skillId}, it probably doesn't exist in database`);
    }
};
exports.update = update;
/**
 * Delete a skill by its id in database
 *
 * @param {number} skillId
 * @returns no content
 */
const deleteSkill = async (skillId) => {
    const skillToRemove = await skillRepository.findOneBy({ id: skillId });
    if (skillToRemove) {
        return await skillRepository.remove(skillToRemove);
    }
    else {
        throw new customError_types_1.CustomError(400, `Problem to remove skill with id ${skillId}, it probably doesn't exist in database`);
    }
};
exports.deleteSkill = deleteSkill;
// //***************  HELPERS  ********************
// //**********************************************
// // Check if all skills exist in database
// export const checkIfAllSkillsExist = async (skills: SkillSendByUser[]): Promise<boolean | any | unknown> => {
//   console.log("skills =>", skills);
//   return
//   const checkErrors: (string | undefined)[] = await Promise.all(skills.map(async skill => {
//     const isSkillExist: Skill | null = await skillRepository.findOneBy({ id: skill.id });
//     if (isSkillExist === null) {
//       return `The skill with the identifier ${skill.id} isn't registered in database`;
//     } else if (skill.name !== isSkillExist.name) {
//       return `The skill ${skill.name} doesn't have the good identifier`;
//     } else {
//       return "";
//     }
//   }));
//   // If there is some errors we return just the first one
//   // We filter errors to remove undefined items
//   const filteredCheckErrors: (string | undefined)[] = checkErrors.filter(error => typeof error === "string" && error.length > 0)
//   if (filteredCheckErrors.length > 0) {
//     throw new CustomError(400,  filteredCheckErrors[0]);
//   }
//   return true;
// }
// // Retrieve skills users in database
// export const retrieveUserSkill = async (skillId: number, userId: number, skillName: string): Promise<SkillToUserInDBInterface | null> => {
//   const relationFound = skillToUserRepository.findOneBy({
//     skillId: skillId,
//     userId: userId
//   })
//   if (relationFound === null) {
//     throw new CustomError(400, `You don't have the skill ${skillName}`);
//   }
//   return relationFound
// }

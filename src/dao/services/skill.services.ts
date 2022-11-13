import Skill from "../entities/Skill.entities";
import databaseConfig from "../../config/typeorm";
import { CustomError } from "../../types/customError.types";
const skillRepository = databaseConfig.getRepository(Skill);


/**
 * Returns all skills from database
 * @returns Skill[]
 */
export const getAll = async (): Promise<Array<Skill>> => {
  const skills = await skillRepository.find();
  if (skills !== null) {
    return skills;
  } else {
    throw new CustomError(500, `There is a problem to load skills from the database`);
  }
}


/**
 * Returns a skill by its id from database
 * 
 * @param {number} id The id to use to retrieve a specific skill
 * @returns skill if exist null otherwise
 */
export const getById = async (id: number): Promise<Skill | null> => {
  const isSkillExist = await skillRepository.findOneBy({
    id: id
  });

  if (isSkillExist && Object.keys(isSkillExist).length > 0) {
    return isSkillExist;
  } else {
    throw new CustomError(401, `The skill with the id ${id} doesn't exist in database`);
  }
}


/**
 * Retrieve a skill by name.
 * @param name skill name
 * @returns the skill if exist null otherwise
 */
 export const getByName = async (name: string): Promise<Skill | null> => {
  try {
    const retrievedSkill = await skillRepository.findOneBy({
      name
    });
    if (retrievedSkill && Object.keys(retrievedSkill).length > 0) {
      return retrievedSkill;
    } else {
      throw new Error('not-found');
    }
  } catch (e) {
    if (e instanceof Error && e.message === 'not-found') {
      throw new CustomError(426, `The skill with the name ${name} not found in database`);
    }
    throw new CustomError(500, `Internal connection error`);
  }
};


/**
 * Verify if a skill doesn't already exist in database before creation.
 * @param name skill name
 * @returns bool true or false
 */
 export const verifyIfNotExistByName = async (name: string): Promise<boolean> => {
  try {
    const retrievedSkill = await skillRepository.findOneBy({
      name
    });
    if (retrievedSkill && Object.keys(retrievedSkill).length > 0) {
      throw new Error('name-already-found');
    } else {
      return true;
    }
  } catch (e) {
    if (e instanceof Error && e.message === 'name-already-found') {
      throw new Error("name-already-found");
    } else {
      throw new CustomError(500, `Internal connection error`);
    }
  }
};


/**
 * Create and return a skill
 * @param name skill name 
    @returns Skill the created skill
*/
export const create = async (name: string): Promise<Skill | null | undefined> => {
  try {
    const isSkillNotExist = await verifyIfNotExistByName(name);
    if (isSkillNotExist) {
      try {
        const createdSkill = await skillRepository.save({ name });
        return createdSkill;
      } catch (e) {
        throw new Error('creation-error');
      }
    }
  } catch (e) {
    if (e instanceof Error) {
      if (e.message === 'name-already-found') {
        throw new CustomError(400, `The skill ${name} already exist in database`);
      } else if (e.message === 'creation-error') {
        throw new CustomError(400, `Error during the skill creation`);
      }
    }
    throw new CustomError(500, `Internal connection error`);
  }
}


/**
 * Update a skill in database and return it
 * 
 * @param {number} skillId existing skill id
 * @param {string} name new skill name 
 * @returns updated skill
 */
export const update = async (skillId: number, name: string): Promise<Skill | undefined> => {
  try {
    const isNameAlreadyExist = await verifyIfNotExistByName(name);
    const skillToUpdate = await getById(skillId);
  
    if (
      isNameAlreadyExist && 
      skillToUpdate !== null && 
      Object.keys(skillToUpdate).length > 0
    ) {
      const updatedSkill = {...skillToUpdate, name};
      return await skillRepository.save(updatedSkill);
    }
  } catch (e) {
    if (e instanceof Error) {
      if (e.message === 'name-already-found') {
        throw new CustomError(400, `The skill ${name} already exist in database`);
      }
    }
    throw new CustomError(500, `Problem to update skill with id ${skillId}, it probably doesn't exist in database`);
  }
}


/**
 * Delete a skill by its id in database
 * 
 * @param {number} skillId 
 * @returns no content
 */
export const deleteSkill = async (skillId: number): Promise<Skill | undefined> => {
  try {
    const skillToRemove = await getById(skillId);
    if (skillToRemove && Object.keys(skillToRemove).length > 0) {
      return await skillRepository.remove(skillToRemove);
    }
  } catch (e) {
    throw new CustomError(400, `Problem to remove skill with id ${skillId}, it probably doesn't exist in database`)
  }
}

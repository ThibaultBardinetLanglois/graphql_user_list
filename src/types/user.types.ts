import { ISkill, ISkillInDB, ISkillSendByUser } from "./skill.types";

export interface IUser {
  name: string;
  skills: ISkill[];
}

export interface UserInDB extends IUser {
  id: number;
}

export interface ICreatedUser {
  id: number,
  name: string;
  skills: ISkillSendByUser[];
}
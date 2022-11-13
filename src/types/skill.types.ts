export interface ISkill {
  name: string
}

export interface ISkillInDB extends ISkill {
  id: number;
}

export interface ISkillSendByUser {
  id: number,
  name: string,
  vote: number
}

export interface ICreatedUserSkillRelation {
  userId: number,
  skillId: number,
  vote: number
}

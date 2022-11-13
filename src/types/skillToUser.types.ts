export interface ISkillToUser {
  vote: number | null,
  skillId: number,
  userId: number
}

export interface ISkillToUserInDB {
  skillToUserId: number,
  vote: number | null,
  skillId: number,
  userId: number
}

export interface IUserSkillRelationToDelete {
  skillToUserId: 31,
  userId: 4,
  skillId: 15,
  vote: 6
  delete: true
}
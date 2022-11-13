import { Resolver, Arg, Mutation, Query } from "type-graphql";
import Skill from "../../dao/entities/Skill.entities";
import * as SkillService from "../../dao/services/skill.services";

@Resolver(Skill)
export class SkillResolver {
  @Query(() => [Skill])
  async getAllSkill(): Promise<Skill[]> {
    return await SkillService.getAll();
  }
  
  @Query(() => Skill)
  async getSkillById(@Arg("id")id: number): Promise<Skill | null> {
    return await SkillService.getById(id);
  }

  @Query(() => Skill)
  async getSkillByName(@Arg("name")name: string): Promise<Skill | null> {
    return await SkillService.getByName(name);
  }

  @Mutation(() => Skill)
  async createSkill(@Arg("name") name: string): Promise<Skill | null | undefined> {
    return await SkillService.create(name);
  }

  @Mutation(() => Skill)
  async updateSkill(@Arg("id") id: number, @Arg("name") name: string): Promise<Skill | null | undefined> {
    return await SkillService.update(id, name);
  }

  @Mutation(() => Skill)
  async deleteSkill(@Arg("id") id: number): Promise<Skill | undefined> {
    return await SkillService.deleteSkill(id);
  }
}
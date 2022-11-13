import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import Skill from "./Skill.entities";
import User from "./User.entities";

@ObjectType()
@Entity()
export default class SkillToUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  votes: number;

  @ManyToOne(() => User, (user) => user.skillToUser)
  user: User;

  @Field(() => Skill)
  @ManyToOne(() => Skill, (skill) => skill.skillToUser, {
    eager: true,
  })
  skill: Skill;
}
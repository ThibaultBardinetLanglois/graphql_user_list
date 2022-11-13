import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import SkillToUser from "./SkillToUser.entities";

@ObjectType()
@Entity()
export default class Skill {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => SkillToUser, (skillToUser) => skillToUser.skill)
  skillToUser: SkillToUser[];
}
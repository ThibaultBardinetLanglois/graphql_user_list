import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import SkillToUser from "./SkillToUser.entities";

@ObjectType()
@Entity()
export default class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [SkillToUser])
  @OneToMany(() => SkillToUser, (skillToUser) => skillToUser.user)
  skillToUser?: SkillToUser[];
}
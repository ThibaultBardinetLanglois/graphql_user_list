import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { CreateUserInput } from "../inputs/user.inputs";
import User from "../../dao/entities/User.entities";
import * as UserService from "../../dao/services/user.services";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return await UserService.getAll();
  }

  @Query(() => User)
  async getUserById(@Arg("id")id: number): Promise<User | null> {
    return await UserService.getById(id);
  }

  @Mutation(() => User)
  async createWilder(
    @Arg("user") user: CreateUserInput
  ): Promise<User> {
    return await UserService.create(user);
  }
}
import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "../graphql/resolvers/user.resolvers";
import { SkillResolver } from "../graphql/resolvers/skill.resolvers";

export const startAppoloServer = async (): Promise<any> => {
  const schema = await buildSchema({
    resolvers: [UserResolver, SkillResolver],
  });

  const server =  new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(`🚀  Appolo server ready at ${url}`);
  });
}

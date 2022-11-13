"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startAppoloServer = void 0;
const apollo_server_1 = require("apollo-server");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const user_resolvers_1 = require("../graphql/resolvers/user.resolvers");
const skill_resolvers_1 = require("../graphql/resolvers/skill.resolvers");
const startAppoloServer = async () => {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [user_resolvers_1.UserResolver, skill_resolvers_1.SkillResolver],
    });
    const server = new apollo_server_1.ApolloServer({ schema });
    server.listen().then(({ url }) => {
        console.log(`🚀  Appolo server ready at ${url}`);
    });
};
exports.startAppoloServer = startAppoloServer;

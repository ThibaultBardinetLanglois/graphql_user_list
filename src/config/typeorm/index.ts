import { DataSource } from "typeorm";
import config  from "..";
import User from "../../dao/entities/User.entities";
import Skill from "../../dao/entities/Skill.entities";
import SkillToUser from "../../dao/entities/SkillToUser.entities";
     
const databaseConfig  = new DataSource({
  type: "mysql",
  port: Number(config.database.port),
  username: config.database.user,
  password: config.database.password!,
  database: config.database.name!,
  logging: true,
  entities: [User, Skill, SkillToUser],
  subscribers: [],
  migrations: [],
  // synchronize: true
}) 

export default databaseConfig;

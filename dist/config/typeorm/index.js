"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const __1 = __importDefault(require(".."));
const User_entities_1 = __importDefault(require("../../dao/entities/User.entities"));
const Skill_entities_1 = __importDefault(require("../../dao/entities/Skill.entities"));
const SkillToUser_entities_1 = __importDefault(require("../../dao/entities/SkillToUser.entities"));
const databaseConfig = new typeorm_1.DataSource({
    type: "mysql",
    port: Number(__1.default.database.port),
    username: __1.default.database.user,
    password: __1.default.database.password,
    database: __1.default.database.name,
    logging: true,
    entities: [User_entities_1.default, Skill_entities_1.default, SkillToUser_entities_1.default],
    subscribers: [],
    migrations: [],
    // synchronize: true
});
exports.default = databaseConfig;

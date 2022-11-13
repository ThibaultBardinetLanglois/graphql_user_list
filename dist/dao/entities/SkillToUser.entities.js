"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Skill_entities_1 = __importDefault(require("./Skill.entities"));
const User_entities_1 = __importDefault(require("./User.entities"));
let SkillToUser = class SkillToUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SkillToUser.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SkillToUser.prototype, "votes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entities_1.default, (user) => user.skillToUser),
    __metadata("design:type", User_entities_1.default)
], SkillToUser.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Skill_entities_1.default),
    (0, typeorm_1.ManyToOne)(() => Skill_entities_1.default, (skill) => skill.skillToUser, {
        eager: true,
    }),
    __metadata("design:type", Skill_entities_1.default)
], SkillToUser.prototype, "skill", void 0);
SkillToUser = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], SkillToUser);
exports.default = SkillToUser;

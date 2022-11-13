"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const SkillService = __importStar(require("../../dao/services/skill.services"));
const getAll = async (req, res) => {
    try {
        const skills = await SkillService.getAll();
        res.status(200).send(skills);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
exports.getAll = getAll;
// export const getById = async (req: Request, res: Response): Promise<ISkill | any> => {
//   try {
//     const skill: ISkill | null = await SkillService.getById(Number(req.params.id));
//     res.status(200).send(skill);
//   } catch (err: any | unknown) {
//     res.status(500).send(err.message)
//   }
// }
// export const create = async (req: Request, res: Response): Promise<ISkill | any> => {
//   try {
//     const skill: ISkill = await SkillService.create(req.body);
//     res.status(201).send (skill);
//   } catch (err: any | unknown) {
//     res.status(err.status).send(err.message)
//   }
// }
// export const update = async (req: Request, res: Response): Promise<ISkill | any> => {
//   try {
//     const skill: ISkill = await SkillService.update(Number(req.params.id), req.body);
//     res.status(201).send(skill);
//   } catch (err: any | unknown) {
//     res.status(500).send(err.message)
//   }
// }
// export const deleteSkill = async (req: Request, res: Response): Promise<void> => {
//   try {
//     await SkillService.deleteSkill(Number(req.params.id));
//     res.status(204).end();
//   } catch (err: any | unknown) {
//     res.status(500).send(err.message)
//   }
// }

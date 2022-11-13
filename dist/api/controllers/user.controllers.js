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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAll = void 0;
const express_1 = __importDefault(require("express"));
const UserService = __importStar(require("../../dao/services/user.services"));
const router = express_1.default.Router();
// GET /api/user
const getAll = async (request, response) => {
    const users = await UserService.getAll();
    response.json({ message: "users" });
};
exports.getAll = getAll;
// POST /users
// BODY {}
const createUser = async (request, response) => {
    try {
        const userRequest = request.body;
        const userCreated = await UserService.create(userRequest);
        response.send(userCreated);
    }
    catch (e) {
        response.send("ERROR");
    }
};
exports.createUser = createUser;
// PUT /user/4
// BODY {}
const updateUser = async (request, response) => {
    const userId = parseInt(request.params.id);
    const userRequest = request.body;
    const userUpdated = await UserService.updateUser(userRequest, userId);
    response.send(userUpdated);
};
exports.updateUser = updateUser;
// DELETE /wilders/6
const deleteUser = async (request, response) => {
    const userId = parseInt(request.params.id);
    await UserService.deleteUser(userId);
    response.sendStatus(204);
};
exports.deleteUser = deleteUser;
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loaders_1 = __importDefault(require("./loaders"));
const startServer = async () => {
    await (0, loaders_1.default)();
};
void startServer();

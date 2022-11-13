"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseLoader = void 0;
const typeorm_1 = __importDefault(require("../config/typeorm"));
const config_1 = __importDefault(require("../config"));
class DatabaseLoader {
}
exports.DatabaseLoader = DatabaseLoader;
_a = DatabaseLoader;
DatabaseLoader.openConnection = async () => {
    typeorm_1.default.initialize()
        .then(() => {
        console.log(`Database ${config_1.default.database.name} is connected and is running on port ${config_1.default.database.port}`);
    })
        .catch(err => {
        console.error('Unable to connect to the database');
        console.error(err);
        throw new Error("Unable to connect to database");
    });
};

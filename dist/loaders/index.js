"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_server_loaders_1 = require("./appolo-server.loaders");
const database_loaders_1 = require("./database.loaders");
async function default_1() {
    await database_loaders_1.DatabaseLoader.openConnection();
    await (0, appolo_server_loaders_1.startAppoloServer)();
}
exports.default = default_1;

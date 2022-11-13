"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../api/routes"));
const logger_mdw_1 = require("../middlewares/console/logger.mdw");
const morgan_mdw_1 = __importDefault(require("../middlewares/console/morgan.mdw"));
const config_1 = __importDefault(require("../config"));
async function default_1(app) {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(logger_mdw_1.loggerMdw);
    app.use(morgan_mdw_1.default);
    app.use('/api', routes_1.default);
    app.get('/status', (req, res) => {
        res.status(200).send(`The server responds well on port ${config_1.default.server_port}`);
    });
    app.listen(config_1.default.server_port, () => {
        console.log(`The application is listening on port ${config_1.default.server_port}!`);
    });
}
exports.default = default_1;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(status, message) {
        super(message);
        this.status = 400;
        this.message = 'Ouups!!Something went wrong\n';
        this.status = status;
        this.message += message;
        // 👇️ because we are extending a built-in class
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;

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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandNotFound = exports.CommandError = void 0;
const builders_1 = require("@discordjs/builders");
const __1 = require("..");
class CommandError extends __1.DiscordExeption {
    constructor() {
        super(...arguments);
        this.name = 'Command Error';
    }
}
exports.CommandError = CommandError;
class CommandNotFound extends CommandError {
    constructor(command) {
        super(`Command ${(0, builders_1.inlineCode)(command)} doesn't exist`);
        this.name = 'Command Not Found';
    }
}
exports.CommandNotFound = CommandNotFound;
__exportStar(require("./checkFailures"), exports);
__exportStar(require("./userInputErrors"), exports);

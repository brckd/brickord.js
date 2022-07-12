"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotMissingPermissions = exports.MissingPermissions = exports.CheckFailure = void 0;
const _1 = require(".");
const builders_1 = require("@discordjs/builders");
class CheckFailure extends _1.CommandError {
    constructor() {
        super(...arguments);
        this.name = 'Check Failure';
    }
}
exports.CheckFailure = CheckFailure;
class MissingPermissions extends CheckFailure {
    constructor(permissions) {
        super(`Missing permissions: ${permissions.toArray().map(p => (0, builders_1.inlineCode)(p)).join(', ')}`);
        this.name = 'Missing Permissions';
    }
}
exports.MissingPermissions = MissingPermissions;
class BotMissingPermissions extends CheckFailure {
    constructor(permissions) {
        super(`I'm missing permissions to do this: ${permissions.toArray().map(p => (0, builders_1.inlineCode)(p)).join(', ')}`);
        this.name = 'Missing Permissions';
    }
}
exports.BotMissingPermissions = BotMissingPermissions;

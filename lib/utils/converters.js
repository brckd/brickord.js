"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMentionable = exports.getRole = exports.getChannel = exports.getMember = exports.getBoolean = exports.getNumber = exports.getInt = void 0;
const __1 = require("..");
function getInt(query) {
    const result = parseInt(query);
    if (isNaN(result))
        throw new __1.BadIntArgument(query);
    return result;
}
exports.getInt = getInt;
function getNumber(query) {
    const result = parseFloat(query);
    if (isNaN(result))
        throw new __1.BadNumArgument(query);
    return result;
}
exports.getNumber = getNumber;
function getBoolean(query) {
    const result = ['true', 'yes'].includes(query.toLowerCase())
        ? true
        : ['false', 'no'].includes(query.toLowerCase())
            ? false
            : undefined;
    if (!result)
        throw new __1.BadBoolArgument(query);
    return result;
}
exports.getBoolean = getBoolean;
function getMember(message, query) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const result = (_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.members.cache.get(query.replace(/\D+/g, ''))) !== null && _b !== void 0 ? _b : (_d = (yield ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.members.search({ query: query, limit: 1 })))) === null || _d === void 0 ? void 0 : _d.first();
        if (!result)
            throw new __1.MemberNotFound(query);
        return result;
    });
}
exports.getMember = getMember;
function getChannel(message, query) {
    var _a, _b, _c;
    const result = (_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.channels.cache.get(query.replace(/\D+/g, ''))) !== null && _b !== void 0 ? _b : (_c = message.guild) === null || _c === void 0 ? void 0 : _c.channels.cache.find(c => c.name === query.replace(/[^A-Za-z0-9-]+/g, '').toLowerCase());
    if (!result)
        throw new __1.ChannelNotFound(query);
    return result;
}
exports.getChannel = getChannel;
function getRole(message, query) {
    var _a, _b, _c;
    const result = (_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.roles.cache.get(query.replace(/\D+/g, ''))) !== null && _b !== void 0 ? _b : (_c = message.guild) === null || _c === void 0 ? void 0 : _c.roles.cache.find(r => r.name.toLowerCase() === query.replace(/[^A-Za-z0-9]+/g, '').toLowerCase());
    if (!result)
        throw new __1.RoleNotFound(query);
    return result;
}
exports.getRole = getRole;
function getMentionable(message, query) {
    var _a;
    try {
        return (_a = getMember(message, query)) !== null && _a !== void 0 ? _a : getRole(message, query);
    }
    catch (_b) {
        throw new __1.MentionableNotFound(query);
    }
}
exports.getMentionable = getMentionable;

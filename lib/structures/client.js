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
exports.Client = void 0;
const discord_js_1 = require("discord.js");
const __1 = require("..");
const path_1 = require("path");
class Client extends discord_js_1.Client {
    constructor(options) {
        var _a, _b, _c;
        super(options);
        this.prefix = Object.assign(options.prefix
            ? options.prefix instanceof Array
                ? options.prefix
                : [options.prefix]
            : ['!'], {
            resolve: (interaction) => __awaiter(this, void 0, void 0, function* () {
                return (yield Promise.all(this.prefix.map((prefix) => __awaiter(this, void 0, void 0, function* () {
                    return typeof (prefix) === 'function'
                        ? yield prefix(interaction)
                        : prefix;
                })))).filter(p => typeof (p) !== 'undefined');
            })
        });
        this.color = options.color;
        this.owners = (_a = options.owners) !== null && _a !== void 0 ? _a : [];
        this.testGuilds = options.testGuilds;
        this.eventsDir = (_b = options.eventsDir) !== null && _b !== void 0 ? _b : (0, path_1.join)(__1.mainRoot, 'events');
        this.events = new discord_js_1.Collection();
        this.loadEvents = (dir) => (0, __1.loadEvents)(this, dir);
        this.loadEvents();
        this.loadEvents((0, path_1.join)(__1.libRoot, 'events'));
        this.commandsDir = (_c = options.commandsDir) !== null && _c !== void 0 ? _c : (0, path_1.join)(__1.mainRoot, 'commands');
        this.commands = new discord_js_1.Collection();
        this.loadCommands = (dir) => (0, __1.loadCommands)(this, dir);
        this.loadCommands();
        this.loadCommands((0, path_1.join)(__1.libRoot, 'commands'));
    }
}
exports.Client = Client;

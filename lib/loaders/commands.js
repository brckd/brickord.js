"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCommands = void 0;
const __1 = require("..");
const path_1 = require("path");
function loadCommands(client, dir) {
    (0, __1.getAllFiles)(dir !== null && dir !== void 0 ? dir : client.commandsDir).forEach(file => {
        var _a;
        delete require.cache[require.resolve(file)];
        const cmds = require(file);
        for (const c in cmds) {
            const name = (_a = cmds[c].data.name) !== null && _a !== void 0 ? _a : c.replace('default', (0, path_1.basename)(file).slice(0, -3));
            const cmd = Object.assign(cmds[c], { data: cmds[c].data.setName(name).toJSON() });
            client.commands.set(name, cmd);
        }
    });
}
exports.loadCommands = loadCommands;

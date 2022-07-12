"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEvents = void 0;
const __1 = require("..");
const path_1 = require("path");
function loadEvents(client, dir) {
    (0, __1.getFiles)(dir !== null && dir !== void 0 ? dir : client.eventsDir).forEach(file => {
        var _a;
        delete require.cache[require.resolve(file)];
        const event = require(file).default;
        const filename = (0, path_1.basename)(file).slice(0, -3);
        const name = ((_a = event.name) !== null && _a !== void 0 ? _a : filename);
        if (!client.events.has(filename))
            client.on(name, (...args) => { var _a; return (_a = client.events.get(filename)) === null || _a === void 0 ? void 0 : _a.run(client, ...args); });
        client.events.set(filename, event);
    });
}
exports.loadEvents = loadEvents;

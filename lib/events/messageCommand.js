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
const __1 = require("..");
exports.default = {
    name: 'messageCreate',
    run: (client, message) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (message.author.bot)
            return;
        let prefix = (yield client.prefix.resolve(message)).find((prefix) => typeof (prefix) === 'string'
            ? message.content.toLowerCase().startsWith(prefix)
            : prefix === null || prefix === void 0 ? void 0 : prefix.test(message.content));
        if (!prefix)
            return;
        const options = message.content.replace(prefix, '').trim().split(/ +/g);
        const name = (_a = options.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        let command = client.commands.get(name);
        const attachments = message.attachments.toJSON();
        try {
            if (!command)
                throw new __1.CommandNotFound(name);
            if (!command.data.options)
                command.data.options = [];
            if (options.length > command.data.options.length)
                throw new __1.TooManyArguments(command.data.options.length, options.length);
            const args = yield Promise.all(command.data.options.map((option, i) => __awaiter(void 0, void 0, void 0, function* () {
                const query = options[i];
                if (!query)
                    if (option.required)
                        throw new __1.MissingRequiredArgument(option.name);
                    else
                        return;
                const arg = yield (() => __awaiter(void 0, void 0, void 0, function* () {
                    switch (option.type) {
                        case 3: return query;
                        case 4: return (0, __1.getInt)(query);
                        case 5: return (0, __1.getBoolean)(query);
                        case 6: return yield (0, __1.getMember)(message, query);
                        case 7: return (0, __1.getChannel)(message, query);
                        case 8: return (0, __1.getRole)(message, query);
                        case 9: return (0, __1.getMentionable)(message, query);
                        case 10: return (0, __1.getNumber)(query);
                        case 11:
                            const result = attachments.shift();
                            if (!result)
                                throw new __1.AttachmentNotFound();
                            return result;
                    }
                }))();
                return arg;
            })));
            const context = Object.assign(message, { command });
            command.run(context, ...args);
        }
        catch (err) {
            if (err instanceof __1.CommandError)
                client.emit('commandError', message, err);
            else
                console.error(err);
        }
    })
};

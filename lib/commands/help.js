"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const builders_1 = require("@discordjs/builders");
exports.default = {
    data: new builders_1.SlashCommandBuilder()
        .setDescription('Sends info about commands')
        .addStringOption(o => o
        .setName('command')
        .setDescription('The command to get info about')),
    run: (interaction, command) => {
        var _a, _b;
        if (!command)
            interaction.reply({
                embeds: [{
                        title: 'Help',
                        description: 'Use `help [command]` for more info on a command.',
                        fields: [{
                                name: 'Commands',
                                value: interaction.client.commands.map(c => { var _a, _b; return `${c.data.name} ${((_b = (_a = c.data.options) === null || _a === void 0 ? void 0 : _a.map(o => o.required ? `<${o.name}>` : `[${o.name}]`).join(' ')) !== null && _b !== void 0 ? _b : '')}`; }).join('\n')
                            }]
                    }]
            });
        else {
            const cmd = interaction.client.commands.get(command);
            if (!cmd)
                throw new __1.CommandNotFound(command);
            interaction.reply({
                embeds: [{
                        title: 'Help',
                        description: `${cmd.data.name} ${((_b = (_a = cmd.data.options) === null || _a === void 0 ? void 0 : _a.map(o => o.required ? `<${o.name}>` : `[${o.name}]`).join(' ')) !== null && _b !== void 0 ? _b : '')}`,
                    }]
            });
        }
    }
};

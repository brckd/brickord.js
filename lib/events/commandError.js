"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    run: ({}, interaction, err) => {
        if (err instanceof Error)
            interaction.reply({
                embeds: [{
                        title: err.name,
                        description: err.message,
                        color: 'RED'
                    }],
                ephemeral: true
            });
        else
            console.error(err);
    }
};

import { CommandInteraction, Interaction } from "discord.js";
import { EventData, ChatCommand, CommandOption, CommandNotFound, CommandError } from "..";
import { InteractionReplyOptions, ReplyMessageOptions, Message } from 'discord.js'

export default {
    name: 'interactionCreate',
    run: (client, interaction: Interaction) => {
        if (!(
            interaction.isCommand()
        )) return

        const command = client.commands.get(interaction.commandName)

        try {
            if (!command) throw new CommandNotFound(interaction.commandName)

            let args: CommandOption[] = []
            if (command.data.options) {
                const options = interaction.options
                args = command.data.options.map( option => {
                    switch (option.type) {
                        case 1: return options.getSubcommand(option.required as true | undefined)
                        case 2: return options.getSubcommandGroup(option.required as true | undefined)
                        case 3: return options.getString(option.name, option.required)
                        case 4: return options.getInteger(option.name, option.required)
                        case 5: return options.getBoolean(option.name, option.required)
                        case 6: return options.getUser(option.name, option.required)
                        case 7: return options.getChannel(option.name, option.required)
                        case 8: return options.getRole(option.name, option.required)
                        case 9: return options.getMentionable(option.name, option.required)
                        case 10: return options.getNumber(option.name, option.required)
                        case 11: return options.getAttachment(option.name, option.required)
                    }
                }) as CommandOption[]
            }

            const context = Object.assign(interaction, {
                commandData: command,
                reply: sendDefaultMessage(interaction.reply, interaction, command)
            })

            command.run(context, ...args)
        }
        catch (err) {
            if(err instanceof CommandError)
                client.emit('commandError', interaction, err)
            else
                console.error(err)
        }
    }
} as EventData<'interactionCreate'>

export function sendDefaultMessage(func: CommandInteraction['reply'], object: Object, command: ChatCommand) {
    function send(options: Parameters<CommandInteraction['reply']>[0]){
        if (typeof(options) === 'string')
            options = {
                embeds: [{
                    description: options
                }]
            }
        
        if ('embeds' in options && options.embeds)
            options.embeds = options.embeds.map(e => ({
                title: command.data.name.replace(/\b\w/g, c => c.toUpperCase()),
                color: 'BLURPLE',
                ...e
            }) as Exclude<ReplyMessageOptions['embeds'], undefined>[number])
            
        return func.bind(object)(options)
    }
    return send
}
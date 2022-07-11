import { User, GuildMember, Channel, Role, MessageAttachment, CommandInteraction, Message, Awaitable } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'

export const commandOptions = ['Subcommand', 'Subcommand Group', 'String', 'Integer', 'Boolean', 'Member', 'Channel', 'Role', 'Mentionable', 'Number', 'Attachment'] as const

export type CommandOption = string | number | boolean | User | GuildMember | Channel | Role | MessageAttachment | undefined

export interface ChatCommandData {
    data: Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>
    run: (interaction: CommandInteraction | Message, ...args: CommandOption[]) => Awaitable<void>
}

export interface ChatCommand {
    data: ReturnType<typeof SlashCommandBuilder.prototype.toJSON>
    run: ChatCommandData['run']
}
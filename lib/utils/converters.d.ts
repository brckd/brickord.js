import { Message } from 'discord.js';
export declare function getInt(query: string): number;
export declare function getNumber(query: string): number;
export declare function getBoolean(query: string): boolean;
export declare function getMember(message: Message, query: string): Promise<import("discord.js").GuildMember>;
export declare function getChannel(message: Message, query: string): import("discord.js").GuildBasedChannel;
export declare function getRole(message: Message, query: string): import("discord.js").Role;
export declare function getMentionable(message: Message, query: string): Promise<import("discord.js").GuildMember>;

import { Collection, ColorResolvable, ClientOptions, Client, Message, Awaitable, CommandInteraction } from 'discord.js';
import { EventData, ChatCommand } from '..';
export declare type Prefix = string | RegExp | ((interaction: Message | CommandInteraction) => Awaitable<string | RegExp | undefined>);
export declare type ResolvedPrefix = string | RegExp;
declare module 'discord.js' {
    interface ClientEvents {
        commandError: [interaction: Message | CommandInteraction | UserContextMenuInteraction | MessageContextMenuInteraction, err: Error];
    }
    interface Client {
        prefix: (Prefix)[] & {
            resolve: (interaction: Message | CommandInteraction) => Promise<ResolvedPrefix[]>;
        };
        color?: ColorResolvable;
        owners: string[];
        testGuilds?: string[];
        eventsDir: string;
        events: Collection<string, EventData<keyof ClientEvents>>;
        loadEvents: (dir?: string) => void;
        commandsDir: string;
        commands: Collection<string, ChatCommand>;
        loadCommands: (dir?: string) => void;
    }
}
export interface BrickordClientOptions extends ClientOptions {
    prefix?: Prefix | Prefix[];
    color?: ColorResolvable;
    owners?: string[];
    testGuilds?: string[];
    eventsDir?: string;
    commandsDir?: string;
    buttonsDir?: string;
}
export declare class BrickordClient extends Client {
    constructor(options: BrickordClientOptions);
}

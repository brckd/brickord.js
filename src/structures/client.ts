import { Collection, ColorResolvable, ClientOptions as DClientOptions, Client as DClient, Message, Awaitable, CommandInteraction } from 'discord.js'
import { loadCommands, loadEvents, EventData, ChatCommand, mainRoot, libRoot, InvalidToken } from '..'
import { join } from 'path'

export type Prefix = string | RegExp | ((interaction: Message | CommandInteraction) => Awaitable<string | RegExp | undefined>)
export type ResolvedPrefix = string | RegExp

declare module 'discord.js' {
    interface ClientEvents {
        commandError: [interaction: Message | CommandInteraction | UserContextMenuInteraction | MessageContextMenuInteraction, err: Error]
    }
    
    interface Client {
        prefix: (Prefix)[] & { resolve: (interaction: Message | CommandInteraction) => Promise<ResolvedPrefix[]>}
        color?: ColorResolvable
        owners: string[]
        testGuilds?: string[]
    
        eventsDir: string
        events: Collection<string, EventData<keyof ClientEvents>>
        loadEvents: (dir?: string) => void
    
        commandsDir: string
        commands: Collection<string, ChatCommand>
        loadCommands: (dir?: string) => void
    }
}

export interface ClientOptions extends DClientOptions {
    prefix?: Prefix | Prefix[]
    color?: ColorResolvable
    owners?: string[]
    testGuilds?: string[]

    eventsDir?: string
    commandsDir?: string
    buttonsDir?: string
}

export class Client extends DClient {
    constructor(options: ClientOptions) {
        super(options)

        this.prefix = Object.assign(
            options.prefix
            ? options.prefix instanceof Array
                ? options.prefix
                : [options.prefix]
            : ['!'],
            {
                resolve: async (interaction: Message | CommandInteraction) => (await Promise.all(this.prefix.map(
                    async prefix => typeof(prefix) === 'function'
                    ? await prefix(interaction)
                    : prefix
                ))).filter(p => typeof(p) !== 'undefined') as ResolvedPrefix[]
            }
        )
        
        this.color = options.color
            
        this.owners = options.owners ?? []
        this.testGuilds = options.testGuilds

        this.eventsDir = options.eventsDir ?? join(mainRoot, 'events')
        this.events = new Collection()
        this.loadEvents = (dir) => loadEvents(this, dir)
        this.loadEvents()
        this.loadEvents(join(libRoot, 'events'))

        this.commandsDir = options.commandsDir ?? join(mainRoot, 'commands')
        this.commands = new Collection()
        this.loadCommands = (dir) => loadCommands(this, dir)
        this.loadCommands()
        this.loadCommands(join(libRoot, 'commands'))
    }

    public async login(token?: string | undefined): Promise<string> {
        try {
            return await super.login(token)
        }
        catch (err) {
            if (err instanceof Error && err.name == 'Error [TOKEN_INVALID]')
                throw new InvalidToken()
        }
        return ''
    }
}
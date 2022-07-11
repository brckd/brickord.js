import { Collection, ColorResolvable, ClientOptions as DClientOptions, Client as DClient } from 'discord.js'
import { loadCommands, loadEvents, EventData, ChatCommand, mainRoot, libRoot } from '..'
import { join } from 'path'

declare module 'discord.js' {
    interface ClientEvents {
        commandError: [interaction: Message | CommandInteraction | UserContextMenuInteraction | MessageContextMenuInteraction, err: Error]
    }
    
    interface Client {
        prefix: (string | RegExp)[]
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
    prefix?: string | RegExp | (string | RegExp)[]
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

        this.prefix = options.prefix instanceof Array ? options.prefix ?? ['!'] : [options.prefix ?? '!']
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
}
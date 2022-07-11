import { Client } from ".."
import { ClientEvents, Awaitable} from 'discord.js'

export interface EventData<Name extends keyof ClientEvents> {
    name?: Name
    run: (client: Client, ...args: ClientEvents[Name]) => Awaitable<void>
}
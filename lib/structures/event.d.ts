import { BrickordClient } from "..";
import { ClientEvents, Awaitable } from 'discord.js';
export interface EventData<Name extends keyof ClientEvents> {
    name?: Name;
    run: (client: BrickordClient, ...args: ClientEvents[Name]) => Awaitable<void>;
}

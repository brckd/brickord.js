import { Client, type EventData, getFiles } from '..'
import { ClientEvents } from 'discord.js'
import { basename } from 'path'

export function loadEvents(client: Client, dir?: string) {
    getFiles(dir ?? client.eventsDir).forEach( file => {
        delete require.cache[require.resolve(file)]

        const event = require(file).default as EventData<keyof ClientEvents>
        const filename = basename(file).slice(0, -3)
        const name = (event.name ?? filename) as keyof ClientEvents
        
        if (!client.events.has(filename))
            client.on(name, (...args) => client.events.get(filename)?.run(client, ...args))

        client.events.set(filename, event)
    })
}
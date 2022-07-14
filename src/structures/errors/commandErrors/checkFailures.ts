import { CommandError } from "."
import { Permissions } from 'discord.js'
import { inlineCode } from "@discordjs/builders"


export class CheckFailure extends CommandError {
    name = 'Check Failure'
}

export class MissingPermissions extends CheckFailure {
    name = 'Missing Permissions'
    constructor(permissions: Permissions) {
        super(`Missing permissions: ${permissions.toArray().map(p => inlineCode(p)).join(', ')}`)
    }
}

export class BotMissingPermissions extends CheckFailure {
    name = 'Missing Permissions'
    constructor(permissions: Permissions) {
        super(`I'm missing permissions to do this: ${permissions.toArray().map(p => inlineCode(p)).join(', ')}`)
    }
}

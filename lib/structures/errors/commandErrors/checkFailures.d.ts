import { CommandError } from ".";
import { Permissions } from 'discord.js';
export declare class CheckFailure extends CommandError {
    name: string;
}
export declare class MissingPermissions extends CheckFailure {
    name: string;
    constructor(permissions: Permissions);
}
export declare class BotMissingPermissions extends CheckFailure {
    name: string;
    constructor(permissions: Permissions);
}

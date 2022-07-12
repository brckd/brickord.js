import { DiscordExeption } from '..';
export declare class CommandError extends DiscordExeption {
    name: string;
}
export declare class CommandNotFound extends CommandError {
    name: string;
    constructor(command: string);
}
export * from './checkFailures';
export * from './userInputErrors';

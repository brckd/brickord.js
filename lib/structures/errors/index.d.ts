export declare class DiscordExeption extends Error {
    name: string;
}
export declare class ClientException extends DiscordExeption {
    name: string;
}
export declare class InvalidToken extends ClientException {
    name: string;
    message: string;
}
export * from './commandErrors';

export class DiscordExeption extends Error {
    name = 'Discord Exception'
}

export class ClientException extends DiscordExeption {
    name = 'Client Exception'
}

export class InvalidToken extends ClientException {
    name = 'Invalid Token'
    message = 'An invalid token was provided'
}

export * from './commandErrors'
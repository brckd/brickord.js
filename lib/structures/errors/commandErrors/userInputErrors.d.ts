import { CommandError } from '.';
export declare class UserInputError extends CommandError {
    name: string;
}
export declare class MissingRequiredArgument extends UserInputError {
    name: string;
    constructor(param: string);
}
export declare class TooManyArguments extends UserInputError {
    name: string;
    constructor(required: number, given: number);
}
export declare class BadArgument extends UserInputError {
    name: string;
}
export declare class AttachmentNotFound extends BadArgument {
    name: string;
    constructor();
}
export declare class BadBoolArgument extends BadArgument {
    name: string;
    constructor(input: string);
}
export declare class ChannelNotFound extends BadArgument {
    name: string;
    constructor(input: string);
}
export declare class BadIntArgument extends BadArgument {
    name: string;
    constructor(input: string);
}
export declare class MemberNotFound extends BadArgument {
    name: string;
    constructor(input: string);
}
export declare class MentionableNotFound extends BadArgument {
    name: string;
    constructor(input: string);
}
export declare class BadNumArgument extends BadArgument {
    name: string;
    constructor(input: string);
}
export declare class RoleNotFound extends BadArgument {
    name: string;
    constructor(input: string);
}
export declare class SubcommandNotFound extends BadArgument {
    name: string;
    constructor(input: string);
}
export declare class SubcommandGroupNotFound extends BadArgument {
    name: string;
    constructor(input: string);
}

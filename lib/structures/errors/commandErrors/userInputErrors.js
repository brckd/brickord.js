"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcommandGroupNotFound = exports.SubcommandNotFound = exports.RoleNotFound = exports.BadNumArgument = exports.MentionableNotFound = exports.MemberNotFound = exports.BadIntArgument = exports.ChannelNotFound = exports.BadBoolArgument = exports.AttachmentNotFound = exports.BadArgument = exports.TooManyArguments = exports.MissingRequiredArgument = exports.UserInputError = void 0;
const _1 = require(".");
const builders_1 = require("@discordjs/builders");
class UserInputError extends _1.CommandError {
    constructor() {
        super(...arguments);
        this.name = 'User Input Error';
    }
}
exports.UserInputError = UserInputError;
class MissingRequiredArgument extends UserInputError {
    constructor(param) {
        super(`Missing required argument: ${(0, builders_1.inlineCode)(param)}`);
        this.name = 'Missing Required Argument';
    }
}
exports.MissingRequiredArgument = MissingRequiredArgument;
class TooManyArguments extends UserInputError {
    constructor(required, given) {
        super(`Command has **${required}** parameters, but **${given}** were given`);
        this.name = 'Too Many Arguments';
    }
}
exports.TooManyArguments = TooManyArguments;
class BadArgument extends UserInputError {
    constructor() {
        super(...arguments);
        this.name = 'Bad Argument';
    }
}
exports.BadArgument = BadArgument;
class AttachmentNotFound extends BadArgument {
    constructor() {
        super(`Command expected an attachement, but none was found`);
        this.name = 'Attachment Not Found';
    }
}
exports.AttachmentNotFound = AttachmentNotFound;
class BadBoolArgument extends BadArgument {
    constructor(input) {
        super(`Couldn't convert ${(0, builders_1.inlineCode)(input)} to boolean`);
        this.name = 'Bad Boolean Argument';
    }
}
exports.BadBoolArgument = BadBoolArgument;
class ChannelNotFound extends BadArgument {
    constructor(input) {
        super(`Couldn't find channel ${(0, builders_1.inlineCode)(input)}`);
        this.name = 'Channel Not Found';
    }
}
exports.ChannelNotFound = ChannelNotFound;
class BadIntArgument extends BadArgument {
    constructor(input) {
        super(`Couldn't convert ${(0, builders_1.inlineCode)(input)} to integer`);
        this.name = 'Bad Integer Argument';
    }
}
exports.BadIntArgument = BadIntArgument;
class MemberNotFound extends BadArgument {
    constructor(input) {
        super(`Couldn't find member ${(0, builders_1.inlineCode)(input)}`);
        this.name = 'Member Not Found';
    }
}
exports.MemberNotFound = MemberNotFound;
class MentionableNotFound extends BadArgument {
    constructor(input) {
        super(`Couldn't find mentionable ${(0, builders_1.inlineCode)(input)}`);
        this.name = 'Mentionable Not Found';
    }
}
exports.MentionableNotFound = MentionableNotFound;
class BadNumArgument extends BadArgument {
    constructor(input) {
        super(`Couldn't convert ${(0, builders_1.inlineCode)(input)} to number`);
        this.name = 'Bad Number Argument';
    }
}
exports.BadNumArgument = BadNumArgument;
class RoleNotFound extends BadArgument {
    constructor(input) {
        super(`Couldn't find role ${(0, builders_1.inlineCode)(input)}`);
        this.name = 'Role Not Found';
    }
}
exports.RoleNotFound = RoleNotFound;
class SubcommandNotFound extends BadArgument {
    constructor(input) {
        super(`Couldn't find subcommand ${(0, builders_1.inlineCode)(input)}`);
        this.name = 'Role Not Found';
    }
}
exports.SubcommandNotFound = SubcommandNotFound;
class SubcommandGroupNotFound extends BadArgument {
    constructor(input) {
        super(`Couldn't find subcommand groupü ${(0, builders_1.inlineCode)(input)}`);
        this.name = 'Role Not Found';
    }
}
exports.SubcommandGroupNotFound = SubcommandGroupNotFound;

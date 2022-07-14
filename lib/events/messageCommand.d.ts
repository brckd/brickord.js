import { EventData, ChatCommand } from '..';
import { Message } from 'discord.js';
declare const _default: EventData<"messageCreate">;
export default _default;
export declare function sendDefaultMessage(func: Message['reply'], object: Object, command: ChatCommand): (options: Parameters<Message['reply']>[0]) => Promise<Message<boolean>>;
